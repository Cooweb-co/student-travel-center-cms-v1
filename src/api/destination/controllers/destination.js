'use strict';

/**
 * destination controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::destination.destination', ({ strapi }) => ({
  // Método personalizado para obtener información completa de un destino
  async findComplete(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true,
        gallery: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener información completa por país
  async findByCountry(ctx) {
    const { country } = ctx.params;
    
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      },
      populate: {
        image: true,
        gallery: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener información completa por slug
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        slug: slug
      },
      populate: {
        image: true,
        gallery: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener destinos destacados
  async findFeatured(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        featured: true
      },
      populate: {
        image: true
      }
    });

    return entities;
  },

  // Método personalizado para obtener estadísticas de un destino
  async findStats(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true
      }
    });

    // Retornar solo las estadísticas
    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      country: entity.country,
      slug: entity.slug,
      statistics: entity.statistics,
      statisticsTitle: entity.statisticsTitle
    }));
  },

  // Método personalizado para obtener estadísticas por país
  async findStatsByCountry(ctx) {
    const { country } = ctx.params;
    
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      },
      populate: {
        image: true
      }
    });

    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      country: entity.country,
      slug: entity.slug,
      statistics: entity.statistics,
      statisticsTitle: entity.statisticsTitle
    }));
  },

  // Método personalizado para obtener tips de viaje
  async findTravelTips(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true
      }
    });

    // Retornar solo los tips de viaje
    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      country: entity.country,
      slug: entity.slug,
      travelTips: entity.travelTips,
      travelTipsTitle: entity.travelTipsTitle
    }));
  },

  // Método personalizado para obtener tips de viaje por país
  async findTravelTipsByCountry(ctx) {
    const { country } = ctx.params;
    
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      },
      populate: {
        image: true
      }
    });

    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      country: entity.country,
      slug: entity.slug,
      travelTips: entity.travelTips,
      travelTipsTitle: entity.travelTipsTitle
    }));
  },

  // Método personalizado para obtener características de un destino
  async findFeatures(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true
      }
    });

    // Retornar solo las características
    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      country: entity.country,
      slug: entity.slug,
      features: entity.features,
      featuresTitle: entity.featuresTitle
    }));
  },

  // Método personalizado para obtener características por país
  async findFeaturesByCountry(ctx) {
    const { country } = ctx.params;
    
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      },
      populate: {
        image: true
      }
    });

    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      country: entity.country,
      slug: entity.slug,
      features: entity.features,
      featuresTitle: entity.featuresTitle
    }));
  },

  // Método personalizado para obtener información de programas
  async findPrograms(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      populate: {
        image: true
      }
    });

    // Retornar solo la información de programas
    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      country: entity.country,
      slug: entity.slug,
      programs: entity.programs,
      requirements: entity.requirements
    }));
  },

  // Método personalizado para obtener programas por país
  async findProgramsByCountry(ctx) {
    const { country } = ctx.params;
    
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { 
        active: true,
        country: country
      },
      populate: {
        image: true
      }
    });

    return entities.map(entity => ({
      id: entity.id,
      title: entity.title,
      country: entity.country,
      slug: entity.slug,
      programs: entity.programs,
      requirements: entity.requirements
    }));
  },

  // Método personalizado para obtener lista de países disponibles
  async findCountries(ctx) {
    const entities = await strapi.entityService.findMany('api::destination.destination', {
      filters: { active: true },
      fields: ['country', 'countryCode', 'title', 'slug']
    });

    // Retornar lista única de países
    const countries = entities.map(entity => ({
      country: entity.country,
      countryCode: entity.countryCode,
      title: entity.title,
      slug: entity.slug
    }));

    return countries;
  }
}));
