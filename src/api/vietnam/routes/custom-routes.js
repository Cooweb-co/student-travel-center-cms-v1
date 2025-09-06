'use strict';

/**
 * Custom routes for vietnam
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/vietnams/complete',
      handler: 'vietnam.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/vietnams/stats',
      handler: 'vietnam.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/vietnams/travel-tips',
      handler: 'vietnam.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/vietnams/features',
      handler: 'vietnam.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/vietnams/programs',
      handler: 'vietnam.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
