'use strict';

/**
 * united-kingdom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::united-kingdom.united-kingdom', ({ strapi }) => ({
  // Método personalizado para obtener información completa del Reino Unido
  async findCompleteInfo() {
    const unitedKingdom = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return unitedKingdom;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const unitedKingdom = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
      filters: { active: true }
    });

    return unitedKingdom.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const unitedKingdom = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
      filters: { active: true }
    });

    return unitedKingdom.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const unitedKingdom = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
      filters: { active: true }
    });

    return unitedKingdom.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const unitedKingdom = await strapi.entityService.findMany('api::united-kingdom.united-kingdom', {
      filters: { active: true }
    });

    return unitedKingdom.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
