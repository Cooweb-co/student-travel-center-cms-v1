'use strict';

/**
 * canada service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::canada.canada', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Canadá
  async findCompleteInfo() {
    const canada = await strapi.entityService.findMany('api::canada.canada', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return canada;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const canada = await strapi.entityService.findMany('api::canada.canada', {
      filters: { active: true }
    });

    return canada.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const canada = await strapi.entityService.findMany('api::canada.canada', {
      filters: { active: true }
    });

    return canada.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const canada = await strapi.entityService.findMany('api::canada.canada', {
      filters: { active: true }
    });

    return canada.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const canada = await strapi.entityService.findMany('api::canada.canada', {
      filters: { active: true }
    });

    return canada.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
