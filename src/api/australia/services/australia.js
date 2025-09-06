'use strict';

/**
 * australia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::australia.australia', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Australia
  async findCompleteInfo() {
    const australia = await strapi.entityService.findMany('api::australia.australia', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return australia;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const australia = await strapi.entityService.findMany('api::australia.australia', {
      filters: { active: true }
    });

    return australia.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const australia = await strapi.entityService.findMany('api::australia.australia', {
      filters: { active: true }
    });

    return australia.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const australia = await strapi.entityService.findMany('api::australia.australia', {
      filters: { active: true }
    });

    return australia.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const australia = await strapi.entityService.findMany('api::australia.australia', {
      filters: { active: true }
    });

    return australia.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
