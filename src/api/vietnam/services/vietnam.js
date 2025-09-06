'use strict';

/**
 * vietnam service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vietnam.vietnam', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Vietnam
  async findCompleteInfo() {
    const vietnam = await strapi.entityService.findMany('api::vietnam.vietnam', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return vietnam;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const vietnam = await strapi.entityService.findMany('api::vietnam.vietnam', {
      filters: { active: true }
    });

    return vietnam.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const vietnam = await strapi.entityService.findMany('api::vietnam.vietnam', {
      filters: { active: true }
    });

    return vietnam.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const vietnam = await strapi.entityService.findMany('api::vietnam.vietnam', {
      filters: { active: true }
    });

    return vietnam.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const vietnam = await strapi.entityService.findMany('api::vietnam.vietnam', {
      filters: { active: true }
    });

    return vietnam.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
