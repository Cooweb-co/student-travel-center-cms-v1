'use strict';

/**
 * qatar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::qatar.qatar', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Qatar
  async findCompleteInfo() {
    const qatar = await strapi.entityService.findMany('api::qatar.qatar', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return qatar;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const qatar = await strapi.entityService.findMany('api::qatar.qatar', {
      filters: { active: true }
    });

    return qatar.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const qatar = await strapi.entityService.findMany('api::qatar.qatar', {
      filters: { active: true }
    });

    return qatar.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const qatar = await strapi.entityService.findMany('api::qatar.qatar', {
      filters: { active: true }
    });

    return qatar.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const qatar = await strapi.entityService.findMany('api::qatar.qatar', {
      filters: { active: true }
    });

    return qatar.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
