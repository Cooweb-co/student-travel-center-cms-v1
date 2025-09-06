'use strict';

/**
 * abu-dhabi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::abu-dhabi.abu-dhabi', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Abu Dhabi
  async findCompleteInfo() {
    const abuDhabi = await strapi.entityService.findMany('api::abu-dhabi.abu-dhabi', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return abuDhabi;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const abuDhabi = await strapi.entityService.findMany('api::abu-dhabi.abu-dhabi', {
      filters: { active: true }
    });

    return abuDhabi.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const abuDhabi = await strapi.entityService.findMany('api::abu-dhabi.abu-dhabi', {
      filters: { active: true }
    });

    return abuDhabi.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const abuDhabi = await strapi.entityService.findMany('api::abu-dhabi.abu-dhabi', {
      filters: { active: true }
    });

    return abuDhabi.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const abuDhabi = await strapi.entityService.findMany('api::abu-dhabi.abu-dhabi', {
      filters: { active: true }
    });

    return abuDhabi.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
