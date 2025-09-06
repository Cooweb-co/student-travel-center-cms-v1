'use strict';

/**
 * ireland service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ireland.ireland', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Irlanda
  async findCompleteInfo() {
    const ireland = await strapi.entityService.findMany('api::ireland.ireland', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return ireland;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const ireland = await strapi.entityService.findMany('api::ireland.ireland', {
      filters: { active: true }
    });

    return ireland.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const ireland = await strapi.entityService.findMany('api::ireland.ireland', {
      filters: { active: true }
    });

    return ireland.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const ireland = await strapi.entityService.findMany('api::ireland.ireland', {
      filters: { active: true }
    });

    return ireland.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const ireland = await strapi.entityService.findMany('api::ireland.ireland', {
      filters: { active: true }
    });

    return ireland.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
