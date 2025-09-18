'use strict';

/**
 * program-type controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::program-type.program-type', ({ strapi }) => ({
  // Método personalizado para obtener tipos de programas activos
  async findActive(ctx) {
    const entities = await strapi.entityService.findMany('api::program-type.program-type', {
      filters: { 
        active: true,
        publishedAt: { $notNull: true }
      },
      sort: { name: 'asc' }
    });

    return entities;
  },

  // Método personalizado para obtener solo los nombres
  async findNames(ctx) {
    const entities = await strapi.entityService.findMany('api::program-type.program-type', {
      filters: { 
        active: true,
        publishedAt: { $notNull: true }
      },
      fields: ['id', 'name', 'slug']
    });

    return entities;
  }
}));
