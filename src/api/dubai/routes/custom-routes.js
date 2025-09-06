'use strict';

/**
 * Custom routes for dubai
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/dubais/complete',
      handler: 'dubai.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/dubais/stats',
      handler: 'dubai.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/dubais/travel-tips',
      handler: 'dubai.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/dubais/features',
      handler: 'dubai.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/dubais/programs',
      handler: 'dubai.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
