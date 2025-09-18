'use strict';

/**
 * destination service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::destination.destination', ({ strapi }) => ({
  // Método personalizado para obtener información completa de destinos
  async findCompleteInfo() {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return destinations;
  },



  // Método para obtener destinos destacados
  async findFeaturedDestinations() {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        featured: true
      },
      populate: {
        image: true
      }
    });

    return destinations;
  },

  // Método para obtener estadísticas específicas
  async findStatistics() {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true }
    });

    return destinations.map(item => ({
      id: item.id,
      title: item.title,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },


  // Método para obtener tips de viaje específicos
  async findTravelTips() {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true }
    });

    return destinations.map(item => ({
      id: item.id,
      title: item.title,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },


  // Método para obtener características específicas
  async findFeatures() {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true }
    });

    return destinations.map(item => ({
      id: item.id,
      title: item.title,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },


  // Método para obtener información de programas
  async findPrograms() {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true }
    });

    return destinations.map(item => ({
      id: item.id,
      title: item.title,
      programs: item.programs,
      requirements: item.requirements
    }));
  },


  // Método para buscar destinos por término
  async searchDestinations(searchTerm) {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        $or: [
          { title: { $containsi: searchTerm } },
          { shortDescription: { $containsi: searchTerm } }
        ]
      },
      populate: {
        image: true
      }
    });

    return destinations;
  },

  // Método para obtener solo los títulos de los destinos
  async findTitles() {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      fields: ['id', 'title']
    });

    return destinations.map(destination => ({
      id: destination.id,
      title: destination.title
    }));
  }
}));
 