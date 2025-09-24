'use strict';

/**
 * destination controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::destination.destination', ({ strapi }) => ({
  // Sobrescribir find para incluir campos por defecto
  async find(ctx) {
    // Usar entityService directamente para mayor control
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      ...ctx.query,
      populate: {
        image: true,
        gallery: true,
        programTypes: true,
        ...ctx.query.populate
      }
    });
    
    return { data: entities, meta: {} };
  },

  // Método personalizado para obtener información completa de un destino
  async findComplete(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true,
        programTypes: true
      }
    });

    return entities;
  },



  // Método personalizado para obtener destinos destacados
  async findFeatured(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        featured: true
      },
      populate: {
        image: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener estadísticas de un destino
  async findStats(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true
      }
    });

    // Retornar solo las estadísticas
    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      statistics: entity.statistics,
      statisticsTitle: entity.statisticsTitle
    }));
  },


  // Método personalizado para obtener tips de viaje
  async findTravelTips(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true
      }
    });

    // Retornar solo los tips de viaje
    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      travelTips: entity.travelTips,
      travelTipsTitle: entity.travelTipsTitle
    }));
  },


  // Método personalizado para obtener características de un destino
  async findFeatures(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true
      }
    });

    // Retornar solo las características
    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      features: entity.features,
      featuresTitle: entity.featuresTitle
    }));
  },


  // Método personalizado para obtener información de tipos de programas
  async findProgramTypes(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true,
        programTypes: true
      }
    });

    // Retornar solo la información de tipos de programas
    return entities.map(entity => ({
      id: entity.id,
      name: entity.name,
      programTypes: entity.programTypes,
      requirements: entity.requirements
    }));
  },

  // Método personalizado para obtener solo los títulos de los destinos
  async findTitles(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      fields: ['id', 'title']
    });

    return entities.map(entity => ({
      id: entity.id,
      title: entity.title
    }));
  },

  // Método personalizado para obtener datos del menú (id, name, slug)
  async findMenu(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      fields: ['id', 'name', 'slug']
    });

    return entities.map(entity => ({
      id: entity.id,
      name: entity.name,
      slug: entity.slug
    }));
  },

}));
