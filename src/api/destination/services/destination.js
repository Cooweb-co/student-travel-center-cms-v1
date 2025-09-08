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

  // Método para obtener información completa por país
  async findCompleteInfoByCountry(country) {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      },
      populate: {
        image: true,
        gallery: true
      }
    });

    return destinations;
  },

  // Método para obtener información completa por slug
  async findCompleteInfoBySlug(slug) {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        slug: slug
      },
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
      country: item.country,
      slug: item.slug,
      statistics: item.statistics,
      statisticsTitle: item.statisticsTitle
    }));
  },

  // Método para obtener estadísticas por país
  async findStatisticsByCountry(country) {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      }
    });

    return destinations.map(item => ({
      id: item.id,
      title: item.title,
      country: item.country,
      slug: item.slug,
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
      country: item.country,
      slug: item.slug,
      travelTips: item.travelTips,
      travelTipsTitle: item.travelTipsTitle
    }));
  },

  // Método para obtener tips de viaje por país
  async findTravelTipsByCountry(country) {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      }
    });

    return destinations.map(item => ({
      id: item.id,
      title: item.title,
      country: item.country,
      slug: item.slug,
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
      country: item.country,
      slug: item.slug,
      features: item.features,
      featuresTitle: item.featuresTitle
    }));
  },

  // Método para obtener características por país
  async findFeaturesByCountry(country) {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      }
    });

    return destinations.map(item => ({
      id: item.id,
      title: item.title,
      country: item.country,
      slug: item.slug,
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
      country: item.country,
      slug: item.slug,
      programs: item.programs,
      requirements: item.requirements
    }));
  },

  // Método para obtener programas por país
  async findProgramsByCountry(country) {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      }
    });

    return destinations.map(item => ({
      id: item.id,
      title: item.title,
      country: item.country,
      slug: item.slug,
      programs: item.programs,
      requirements: item.requirements
    }));
  },

  // Método para obtener lista de países disponibles
  async findAvailableCountries() {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      fields: ['country', 'countryCode', 'title', 'slug']
    });

    // Retornar lista única de países
    const countries = destinations.map(item => ({
      country: item.country,
      countryCode: item.countryCode,
      title: item.title,
      slug: item.slug
    }));

    return countries;
  },

  // Método para buscar destinos por término
  async searchDestinations(searchTerm) {
    const destinations = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        $or: [
          { title: { $containsi: searchTerm } },
          { country: { $containsi: searchTerm } },
          { shortDescription: { $containsi: searchTerm } }
        ]
      },
      populate: {
        image: true
      }
    });

    return destinations;
  }
}));
