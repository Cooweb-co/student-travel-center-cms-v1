'use strict';

/**
 * Custom routes for united-states
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/united-state/complete',
      handler: 'united-state.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/united-state/stats',
      handler: 'united-state.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/united-state/travel-tips',
      handler: 'united-state.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/united-state/features',
      handler: 'united-state.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/united-state/programs',
      handler: 'united-state.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
