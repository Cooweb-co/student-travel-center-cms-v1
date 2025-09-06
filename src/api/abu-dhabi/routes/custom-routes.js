'use strict';

/**
 * Custom routes for abu-dhabi
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/abu-dhabis/complete',
      handler: 'abu-dhabi.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/abu-dhabis/stats',
      handler: 'abu-dhabi.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/abu-dhabis/travel-tips',
      handler: 'abu-dhabi.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/abu-dhabis/features',
      handler: 'abu-dhabi.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/abu-dhabis/programs',
      handler: 'abu-dhabi.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
