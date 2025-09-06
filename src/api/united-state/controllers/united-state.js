'use strict';

/**
 * united-states controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::united-state.united-state', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Estados Unidos
  async findComplete(ctx) {
    const entities = await strapi.entityService.findMany('api::united-state.united-state', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener estadísticas de Estados Unidos
  async findStats(ctx) {
    const entities = await strapi.entityService.findMany('api::united-state.united-state', {
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
    const entities = await strapi.entityService.findMany('api::united-state.united-state', {
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

  // Método personalizado para obtener características de Estados Unidos
  async findFeatures(ctx) {
    const entities = await strapi.entityService.findMany('api::united-state.united-state', {
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
    const entities = await strapi.entityService.findMany('api::united-state.united-state', {
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
  }
}));
