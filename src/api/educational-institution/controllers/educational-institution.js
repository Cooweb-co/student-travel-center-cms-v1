'use strict';

/**
 * educational-institution controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::educational-institution.educational-institution', ({ strapi }) => ({
    // Sobrescribir el método find para poblar todos los campos
    async find(ctx) {
        const populate = {
            logo: true,
            programs: true
        };

        ctx.query = {
            ...ctx.query,
            populate
        };

        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },

    // Sobrescribir el método findOne para poblar todos los campos
    async findOne(ctx) {
        const populate = {
            logo: true,
            programs: true
        };

        ctx.query = {
            ...ctx.query,
            populate
        };

        const { data, meta } = await super.findOne(ctx);
        return { data, meta };
    }
}));
