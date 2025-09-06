'use strict';

/**
 * Custom routes for australia
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/australias/complete',
      handler: 'australia.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/australias/stats',
      handler: 'australia.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/australias/travel-tips',
      handler: 'australia.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/australias/features',
      handler: 'australia.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/australias/programs',
      handler: 'australia.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
