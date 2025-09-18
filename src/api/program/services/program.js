'use strict';

/**
 * program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::program.program', ({ strapi }) => ({
  // Método personalizado para obtener programas con información completa
  async findWithFullData(params = {}) {
    const { data, meta } = await strapi.entityService.findMany('api::program.program', {
      ...params,
      populate: {
        featuredImage: true,
        gallery: true,
        destination: {
          populate: {
            image: true
          }
        }
      }
    });

    return { data, meta };
  },

  // Método personalizado para obtener programas por tipo con paginación
  async findByTypeWithPagination(programType, page = 1, pageSize = 10) {
    const { data, meta } = await strapi.entityService.findMany('api::program.program', {
      filters: { 
        active: true,
        programType: programType
      },
      populate: {
        featuredImage: true,
        destination: true
      },
      pagination: {
        page: page,
        pageSize: pageSize
      }
    });

    return { data, meta };
  },

  // Método personalizado para obtener programas relacionados
  async findRelated(programId, limit = 4) {
    // Primero obtenemos el programa actual
    const currentProgram = await strapi.entityService.findOne('api::program.program', programId, {
      populate: {
        destination: true
      }
    });

    if (!currentProgram) {
      return [];
    }

    // Buscamos programas relacionados por destino y tipo
    const relatedPrograms = await strapi.entityService.findMany('api::program.program', {
      filters: {
        id: { $ne: programId },
        active: true,
        $or: [
          { destination: currentProgram.destination?.id },
          { programType: currentProgram.programType }
        ]
      },
      populate: {
        featuredImage: true,
        destination: true
      },
      pagination: {
        limit: limit
      }
    });

    return relatedPrograms;
  },

  // Método personalizado para obtener estadísticas avanzadas
  async getAdvancedStats() {
    const programs = await strapi.entityService.findMany('api::program.program', {
      filters: { active: true },
      populate: {
        destination: true
      }
    });

    const stats = {
      totalPrograms: programs.length,
      programsByType: {},
      programsByDestination: {},
      priceStatistics: {
        average: 0,
        median: 0,
        min: Infinity,
        max: 0
      },
      durationStatistics: {},
      featuredPrograms: 0
    };

    const prices = [];
    let totalPrice = 0;

    programs.forEach(program => {
      // Contar por tipo
      if (!stats.programsByType[program.programType]) {
        stats.programsByType[program.programType] = 0;
      }
      stats.programsByType[program.programType]++;

      // Contar por destino
      if (program.destination) {
        const destName = program.destination.name || program.destination.title;
        if (!stats.programsByDestination[destName]) {
          stats.programsByDestination[destName] = 0;
        }
        stats.programsByDestination[destName]++;
      }

      // Estadísticas de precio
      if (program.price) {
        prices.push(program.price);
        totalPrice += program.price;
        stats.priceStatistics.min = Math.min(stats.priceStatistics.min, program.price);
        stats.priceStatistics.max = Math.max(stats.priceStatistics.max, program.price);
      }

      // Estadísticas de duración
      if (program.duration) {
        if (!stats.durationStatistics[program.duration]) {
          stats.durationStatistics[program.duration] = 0;
        }
        stats.durationStatistics[program.duration]++;
      }

      // Contar destacados
      if (program.featured) {
        stats.featuredPrograms++;
      }
    });

    // Calcular estadísticas de precio
    if (prices.length > 0) {
      stats.priceStatistics.average = totalPrice / prices.length;
      
      // Calcular mediana
      const sortedPrices = prices.sort((a, b) => a - b);
      const mid = Math.floor(sortedPrices.length / 2);
      stats.priceStatistics.median = sortedPrices.length % 2 === 0 
        ? (sortedPrices[mid - 1] + sortedPrices[mid]) / 2 
        : sortedPrices[mid];
    }

    if (stats.priceStatistics.min === Infinity) {
      stats.priceStatistics.min = 0;
    }

    return stats;
  },

  // Método personalizado para validar datos de programa
  async validateProgramData(data) {
    const errors = [];

    // Validar campos requeridos
    if (!data.title) {
      errors.push('El título es requerido');
    }

    if (!data.description) {
      errors.push('La descripción es requerida');
    }

    if (!data.programType) {
      errors.push('El tipo de programa es requerido');
    }

    if (!data.duration) {
      errors.push('La duración es requerida');
    }

    if (!data.price || data.price <= 0) {
      errors.push('El precio debe ser mayor a 0');
    }

    // Validar tipo de programa
    const validTypes = ['work-and-travel', 'estudios-exterior', 'practicas-pasantias', 'au-pair', 'voluntariados'];
    if (data.programType && !validTypes.includes(data.programType)) {
      errors.push('Tipo de programa no válido');
    }

    // Validar slug único
    if (data.slug) {
      const existingProgram = await strapi.entityService.findMany('api::program.program', {
        filters: { 
          slug: data.slug,
          id: { $ne: data.id }
        }
      });

      if (existingProgram.length > 0) {
        errors.push('El slug ya existe');
      }
    }

    return {
      isValid: errors.length === 0,
      errors: errors
    };
  },

  // Método para obtener solo los títulos de los programas
  async findTitles() {
    const programs = await strapi.entityService.findMany('api::program.program', {
      filters: { active: true },
      fields: ['id', 'title']
    });

    return programs.map(program => ({
      id: program.id,
      title: program.title
    }));
  }
}));
