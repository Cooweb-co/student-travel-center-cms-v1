'use strict';

/**
 * Custom routes for destination
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/destinations/complete',
      handler: 'destination.findComplete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/destinations/featured',
      handler: 'destination.findFeatured',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/destinations/stats',
      handler: 'destination.findStats',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/destinations/travel-tips',
      handler: 'destination.findTravelTips',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/destinations/features',
      handler: 'destination.findFeatures',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/destinations/programs',
      handler: 'destination.findPrograms',
      config: {
        auth: false,
      },
    },
  ],
};
