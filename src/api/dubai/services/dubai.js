'use strict';

/**
 * dubai service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dubai.dubai', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Dubai
  async findCompleteInfo() {
    const dubai = await strapi.entityService.findMany('api::dubai.dubai', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return dubai;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const dubai = await strapi.entityService.findMany('api::dubai.dubai', {
      filters: { active: true }
    });

    return dubai.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const dubai = await strapi.entityService.findMany('api::dubai.dubai', {
      filters: { active: true }
    });

    return dubai.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const dubai = await strapi.entityService.findMany('api::dubai.dubai', {
      filters: { active: true }
    });

    return dubai.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const dubai = await strapi.entityService.findMany('api::dubai.dubai', {
      filters: { active: true }
    });

    return dubai.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
