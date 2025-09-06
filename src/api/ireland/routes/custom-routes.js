'use strict';

/**
 * Custom routes for ireland
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/irelands/complete',
      handler: 'ireland.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/irelands/stats',
      handler: 'ireland.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/irelands/travel-tips',
      handler: 'ireland.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/irelands/features',
      handler: 'ireland.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/irelands/programs',
      handler: 'ireland.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
