'use strict';

/**
 * hong-kong service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hong-kong.hong-kong', ({ strapi }) => ({
  // Método personalizado para obtener información completa de Hong Kong
  async findCompleteInfo() {
    const hongKong = await strapi.entityService.findMany('api::hong-kong.hong-kong', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return hongKong;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const hongKong = await strapi.entityService.findMany('api::hong-kong.hong-kong', {
      filters: { active: true }
    });

    return hongKong.map(item => ({
      id: item.id,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const hongKong = await strapi.entityService.findMany('api::hong-kong.hong-kong', {
      filters: { active: true }
    });

    return hongKong.map(item => ({
      id: item.id,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener características específicas
  async findFeatures() {
    const hongKong = await strapi.entityService.findMany('api::hong-kong.hong-kong', {
      filters: { active: true }
    });

    return hongKong.map(item => ({
      id: item.id,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener información de programas
  async findPrograms() {
    const hongKong = await strapi.entityService.findMany('api::hong-kong.hong-kong', {
      filters: { active: true }
    });

    return hongKong.map(item => ({
      id: item.id,
      programs: item.programs,
      requirements: item.requirements
    }));
  }
}));
