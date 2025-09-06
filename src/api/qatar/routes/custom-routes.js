'use strict';

/**
 * Custom routes for qatar
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/qatars/complete',
      handler: 'qatar.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/qatars/stats',
      handler: 'qatar.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/qatars/travel-tips',
      handler: 'qatar.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/qatars/features',
      handler: 'qatar.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/qatars/programs',
      handler: 'qatar.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
