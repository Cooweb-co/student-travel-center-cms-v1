'use strict';

/**
 * Custom routes for united-kingdom
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/united-kingdoms/complete',
      handler: 'united-kingdom.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/united-kingdoms/stats',
      handler: 'united-kingdom.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/united-kingdoms/travel-tips',
      handler: 'united-kingdom.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/united-kingdoms/features',
      handler: 'united-kingdom.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/united-kingdoms/programs',
      handler: 'united-kingdom.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
