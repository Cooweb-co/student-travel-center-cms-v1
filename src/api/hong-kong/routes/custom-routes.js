'use strict';

/**
 * Custom routes for hong-kong
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/hong-kongs/complete',
      handler: 'hong-kong.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/hong-kongs/stats',
      handler: 'hong-kong.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/hong-kongs/travel-tips',
      handler: 'hong-kong.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/hong-kongs/features',
      handler: 'hong-kong.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/hong-kongs/programs',
      handler: 'hong-kong.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
