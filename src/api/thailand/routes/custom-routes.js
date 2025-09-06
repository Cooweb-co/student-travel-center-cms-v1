'use strict';

/**
 * Custom routes for thailand
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/thailands/complete',
      handler: 'thailand.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/thailands/stats',
      handler: 'thailand.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/thailands/travel-tips',
      handler: 'thailand.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/thailands/features',
      handler: 'thailand.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/thailands/programs',
      handler: 'thailand.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
