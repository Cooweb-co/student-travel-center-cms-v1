'use strict';

/**
 * spain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spain.spain', ({ strapi }) => ({
  // Método personalizado para obtener información completa de España
  async findCompleteInfo() {
    const spain = await strapi.entityService.findMany('api::spain.spain', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return spain;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const spain = await strapi.entityService.findMany('api::spain.spain', {
      filters: { active: true }
    });

    return spain.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const spain = await strapi.entityService.findMany('api::spain.spain', {
      filters: { active: true }
    });

    return spain.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const spain = await strapi.entityService.findMany('api::spain.spain', {
      filters: { active: true }
    });

    return spain.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const spain = await strapi.entityService.findMany('api::spain.spain', {
      filters: { active: true }
    });

    return spain.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
