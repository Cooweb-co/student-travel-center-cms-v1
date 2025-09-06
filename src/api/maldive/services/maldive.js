'use strict';

/**
 * maldives service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maldive.maldive', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Maldivas
  async findCompleteInfo() {
    const maldives = await strapi.entityService.findMany('api::maldive.maldive', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return maldives;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const maldives = await strapi.entityService.findMany('api::maldive.maldive', {
      filters: { active: true }
    });

    return maldives.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const maldives = await strapi.entityService.findMany('api::maldive.maldive', {
      filters: { active: true }
    });

    return maldives.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const maldives = await strapi.entityService.findMany('api::maldive.maldive', {
      filters: { active: true }
    });

    return maldives.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const maldives = await strapi.entityService.findMany('api::maldive.maldive', {
      filters: { active: true }
    });

    return maldives.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
