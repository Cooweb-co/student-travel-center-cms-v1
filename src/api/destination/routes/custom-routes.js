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
      path: '/destinations/countries',
      handler: 'destination.findCountries',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/destinations/country/:country',
      handler: 'destination.findByCountry',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/destinations/slug/:slug',
      handler: 'destination.findBySlug',
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
      path: '/destinations/stats/country/:country',
      handler: 'destination.findStatsByCountry',
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
      path: '/destinations/travel-tips/country/:country',
      handler: 'destination.findTravelTipsByCountry',
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
      path: '/destinations/features/country/:country',
      handler: 'destination.findFeaturesByCountry',
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
    {
      method: 'GET',
      path: '/destinations/programs/country/:country',
      handler: 'destination.findProgramsByCountry',
      config: {
        auth: false,
      },
    },
  ],
};
