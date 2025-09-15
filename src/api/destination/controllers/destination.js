'use strict';

/**
 * destination controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::destination.destination', ({ strapi }) => ({
  // Método personalizado para obtener información completa de un destino
  async findComplete(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
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


  // Método personalizado para obtener información de programas
  async findPrograms(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true
      }
    });

    // Retornar solo la información de programas
    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      programs: entity.programs,
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

}));
