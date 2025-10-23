'use strict';

/**
 * program controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::program.program', ({ strapi }) => ({
  // Sobrescribir el método find para poblar todos los campos
  async find(ctx) {
    const populate = {
      image: true,
      programType: true,
      destinos: true,
      como_ayuda_agencia: true,
      beneficios: true,
      visa: true,
      planificacion: true,
      requirements: true,
      why_program: true,
      simple_requirements: true,
      why_stc: true,
      casos_exito: true,
      faq: true,
      tipos_programas: true,
      oportunidades_laborales: true,
      tipos_actividades: {
        populate: {
          image: true
        }
      },
      testimonials: {
        populate: {
          image: true
        }
      }
    };

    ctx.query = {
      ...ctx.query,
      populate
    };
    
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  // Sobrescribir el método findOne para poblar todos los campos
  async findOne(ctx) {
    const populate = {
      image: true,
      programType: true,
      destinos: true,
      como_ayuda_agencia: true,
      beneficios: true,
      visa: true,
      planificacion: true,
      requirements: true,
      why_program: true,
      simple_requirements: true,
      why_stc: true,
      casos_exito: true,
      faq: true,
      tipos_programas: true,
      oportunidades_laborales: true,
      tipos_actividades: {
        populate: {
          image: true
        }
      },
      testimonials: {
        populate: {
          image: true
        }
      }
    };

    ctx.query = {
      ...ctx.query,
      populate
    };
    
    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },

  // Método personalizado para obtener programas por tipo
  async findByType(ctx) {
    const { programType } = ctx.params;
    
    const entities = await strapi.entityService.findMany('api::program.program', {
      filters: { 
        active: true,
        programType: programType
      },
      populate: {
        featuredImage: true,
        destination: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener programas destacados
  async findFeatured(ctx) {
    const entities = await strapi.entityService.findMany('api::program.program', {
      filters: { 
        active: true,
        featured: true
      },
      populate: {
        featuredImage: true,
        destination: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener programas por destino
  async findByDestination(ctx) {
    const { destinationId } = ctx.params;
    
    const entities = await strapi.entityService.findMany('api::program.program', {
      filters: { 
        active: true,
        destination: destinationId
      },
      populate: {
        featuredImage: true,
        destination: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener información completa de un programa
  async findComplete(ctx) {
    const entities = await strapi.entityService.findMany('api::program.program', {
      filters: { active: true },
      populate: {
        featuredImage: true,
        gallery: true,
        destination: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener programas por rango de precio
  async findByPriceRange(ctx) {
    const { minPrice, maxPrice } = ctx.query;
    
    const filters = { active: true };
    
    if (minPrice) {
      filters.price = { $gte: parseFloat(minPrice) };
    }
    
    if (maxPrice) {
      filters.price = { 
        ...filters.price,
        $lte: parseFloat(maxPrice)
      };
    }

    const entities = await strapi.entityService.findMany('api::program.program', {
      filters,
      populate: {
        featuredImage: true,
        destination: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener programas por duración
  async findByDuration(ctx) {
    const { duration } = ctx.params;
    
    const entities = await strapi.entityService.findMany('api::program.program', {
      filters: { 
        active: true,
        duration: duration
      },
      populate: {
        featuredImage: true,
        destination: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener estadísticas de programas
  async findStats(ctx) {
    const entities = await strapi.entityService.findMany('api::program.program', {
      filters: { active: true },
      populate: {
        featuredImage: true
      }
    });

    // Calcular estadísticas
    const stats = {
      totalPrograms: entities.length,
      programsByType: {},
      averagePrice: 0,
      priceRange: { min: 0, max: 0 }
    };

    let totalPrice = 0;
    let minPrice = Infinity;
    let maxPrice = 0;

    entities.forEach(program => {
      // Contar por tipo
      if (!stats.programsByType[program.programType]) {
        stats.programsByType[program.programType] = 0;
      }
      stats.programsByType[program.programType]++;

      // Calcular precios
      if (program.price) {
        totalPrice += program.price;
        minPrice = Math.min(minPrice, program.price);
        maxPrice = Math.max(maxPrice, program.price);
      }
    });

    stats.averagePrice = entities.length > 0 ? totalPrice / entities.length : 0;
    stats.priceRange = { min: minPrice === Infinity ? 0 : minPrice, max: maxPrice };

    return stats;
  },

  // Método personalizado para búsqueda de programas
  async search(ctx) {
    const { q, type, destination, minPrice, maxPrice, duration } = ctx.query;
    
    const filters = { active: true };
    
    // Filtro por texto de búsqueda
    if (q) {
      filters.$or = [
        { title: { $containsi: q } },
        { description: { $containsi: q } },
        { shortDescription: { $containsi: q } }
      ];
    }
    
    // Filtro por tipo
    if (type) {
      filters.programType = type;
    }
    
    // Filtro por destino
    if (destination) {
      filters.destination = destination;
    }
    
    // Filtro por precio
    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.$gte = parseFloat(minPrice);
      if (maxPrice) filters.price.$lte = parseFloat(maxPrice);
    }
    
    // Filtro por duración
    if (duration) {
      filters.duration = duration;
    }

    const entities = await strapi.entityService.findMany('api::program.program', {
      filters,
      populate: {
        featuredImage: true,
        destination: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener solo los títulos de los programas
  async findTitles(ctx) {
    const entities = await strapi.entityService.findMany('api::program.program', {
      filters: { active: true },
      fields: ['id', 'title']
    });

    return entities.map(entity => ({
      id: entity.id,
      title: entity.title
    }));
  }
}));
