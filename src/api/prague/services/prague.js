'use strict';

/**
 * prague service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prague.prague', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Praga
  async findCompleteInfo() {
    const prague = await strapi.entityService.findMany('api::prague.prague', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return prague;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const prague = await strapi.entityService.findMany('api::prague.prague', {
      filters: { active: true }
    });

    return prague.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const prague = await strapi.entityService.findMany('api::prague.prague', {
      filters: { active: true }
    });

    return prague.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const prague = await strapi.entityService.findMany('api::prague.prague', {
      filters: { active: true }
    });

    return prague.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const prague = await strapi.entityService.findMany('api::prague.prague', {
      filters: { active: true }
    });

    return prague.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
