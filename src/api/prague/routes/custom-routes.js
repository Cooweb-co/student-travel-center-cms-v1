'use strict';

/**
 * Custom routes for prague
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pragues/complete',
      handler: 'prague.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/pragues/stats',
      handler: 'prague.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/pragues/travel-tips',
      handler: 'prague.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/pragues/features',
      handler: 'prague.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/pragues/programs',
      handler: 'prague.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
