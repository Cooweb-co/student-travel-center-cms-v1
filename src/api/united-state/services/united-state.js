'use strict';

/**
 * united-states service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::united-state.united-state', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Estados Unidos
  async findCompleteInfo() {
    const unitedStates = await strapi.entityService.findMany('api::united-state.united-state', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return unitedStates;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const unitedStates = await strapi.entityService.findMany('api::united-state.united-state', {
      filters: { active: true }
    });

    return unitedStates.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const unitedStates = await strapi.entityService.findMany('api::united-state.united-state', {
      filters: { active: true }
    });

    return unitedStates.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const unitedStates = await strapi.entityService.findMany('api::united-state.united-state', {
      filters: { active: true }
    });

    return unitedStates.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const unitedStates = await strapi.entityService.findMany('api::united-state.united-state', {
      filters: { active: true }
    });

    return unitedStates.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
