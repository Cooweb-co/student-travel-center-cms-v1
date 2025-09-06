'use strict';

/**
 * united-kingdom controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::united-kingdom.united-kingdom', ({ strapi }) => ({
  // Método personalizado para obtener información completa del Reino Unido
  async findComplete(ctx) {
    const entities = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener estadísticas del Reino Unido
  async findStats(ctx) {
    const entities = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
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
    const entities = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
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

  // Método personalizado para obtener características del Reino Unido
  async findFeatures(ctx) {
    const entities = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
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
    const entities = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
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
