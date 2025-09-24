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
      path: '/destinations/program-types',
      handler: 'destination.findProgramTypes',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/destinations/titles',
      handler: 'destination.findTitles',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/destinations/menu',
      handler: 'destination.findMenu',
      config: {
        auth: false,
      },
    },
  ],
};
