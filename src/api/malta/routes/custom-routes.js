'use strict';

/**
 * Custom routes for malta
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/maltas/complete',
      handler: 'malta.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/maltas/stats',
      handler: 'malta.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/maltas/travel-tips',
      handler: 'malta.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/maltas/features',
      handler: 'malta.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/maltas/programs',
      handler: 'malta.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
