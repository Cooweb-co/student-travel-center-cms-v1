'use strict';

/**
 * malta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::malta.malta', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Malta
  async findCompleteInfo() {
    const malta = await strapi.entityService.findMany('api::malta.malta', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return malta;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const malta = await strapi.entityService.findMany('api::malta.malta', {
      filters: { active: true }
    });

    return malta.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const malta = await strapi.entityService.findMany('api::malta.malta', {
      filters: { active: true }
    });

    return malta.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const malta = await strapi.entityService.findMany('api::malta.malta', {
      filters: { active: true }
    });

    return malta.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const malta = await strapi.entityService.findMany('api::malta.malta', {
      filters: { active: true }
    });

    return malta.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
