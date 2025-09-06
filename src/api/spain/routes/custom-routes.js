'use strict';

/**
 * Custom routes for spain
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/spains/complete',
      handler: 'spain.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/spains/stats',
      handler: 'spain.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/spains/travel-tips',
      handler: 'spain.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/spains/features',
      handler: 'spain.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/spains/programs',
      handler: 'spain.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
