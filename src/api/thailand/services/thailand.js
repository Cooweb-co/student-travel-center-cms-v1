'use strict';

/**
 * thailand service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thailand.thailand', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Tailandia
  async findCompleteInfo() {
    const thailand = await strapi.entityService.findMany('api::thailand.thailand', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return thailand;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const thailand = await strapi.entityService.findMany('api::thailand.thailand', {
      filters: { active: true }
    });

    return thailand.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const thailand = await strapi.entityService.findMany('api::thailand.thailand', {
      filters: { active: true }
    });

    return thailand.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const thailand = await strapi.entityService.findMany('api::thailand.thailand', {
      filters: { active: true }
    });

    return thailand.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const thailand = await strapi.entityService.findMany('api::thailand.thailand', {
      filters: { active: true }
    });

    return thailand.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
