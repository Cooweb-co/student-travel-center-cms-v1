'use strict';

/**
 * Custom routes for canada
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/canadas/complete',
      handler: 'canada.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/canadas/stats',
      handler: 'canada.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/canadas/travel-tips',
      handler: 'canada.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/canadas/features',
      handler: 'canada.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/canadas/programs',
      handler: 'canada.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
