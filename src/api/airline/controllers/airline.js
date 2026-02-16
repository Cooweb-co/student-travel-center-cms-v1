'use strict';

/**
 * airline controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::airline.airline', ({ strapi }) => ({
  // Sobrescribir el método find para poblar el logo
  async find(ctx) {
    const populate = {
      logo: true
    };

    ctx.query = {
      ...ctx.query,
      populate
    };
    
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  // Sobrescribir el método findOne para poblar el logo
  async findOne(ctx) {
    const populate = {
      logo: true
    };

    ctx.query = {
      ...ctx.query,
      populate
    };
    
    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  }
}));
