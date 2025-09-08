'use strict';

/**
 * Custom routes for program
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/programs/type/:programType',
      handler: 'program.findByType',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/programs/featured',
      handler: 'program.findFeatured',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/programs/destination/:destinationId',
      handler: 'program.findByDestination',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/programs/complete',
      handler: 'program.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/programs/price-range',
      handler: 'program.findByPriceRange',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/programs/duration/:duration',
      handler: 'program.findByDuration',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/programs/stats',
      handler: 'program.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/programs/search',
      handler: 'program.search',
      config: {
        auth: false,
      },
    },
  ],
};
