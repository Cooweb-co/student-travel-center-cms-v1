'use strict';

/**
 * Custom routes for program-type
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/program-types/active',
      handler: 'program-type.findActive',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/program-types/names',
      handler: 'program-type.findNames',
      config: {
        auth: false,
      },
    },
  ],
};
