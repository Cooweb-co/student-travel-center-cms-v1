'use strict';

/**
 * Custom routes for maldives
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/maldive/complete',
      handler: 'maldive.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/maldive/stats',
      handler: 'maldive.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/maldive/travel-tips',
      handler: 'maldive.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/maldive/features',
      handler: 'maldive.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/maldive/programs',
      handler: 'maldive.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
