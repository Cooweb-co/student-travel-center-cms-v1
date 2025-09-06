'use strict';

/**
 * thailand router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::thailand.thailand', {
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    create: {
      auth: {
        strategy: 'jwt',
      },
    },
    update: {
      auth: {
        strategy: 'jwt',
      },
    },
    delete: {
      auth: {
        strategy: 'jwt',
      },
    },
  },
});
