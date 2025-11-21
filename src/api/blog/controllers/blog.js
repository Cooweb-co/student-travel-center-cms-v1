'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const ensureEssentialPopulate = (ctx) => {
  const populate = ctx.query?.populate;

  const addEssentialPopulate = (populateObject = {}) => {
    const authorConfig =
      populateObject.author && typeof populateObject.author === 'object' && !Array.isArray(populateObject.author)
        ? { ...populateObject.author }
        : {};

    const authorPopulate =
      authorConfig.populate && typeof authorConfig.populate === 'object' && !Array.isArray(authorConfig.populate)
        ? { ...authorConfig.populate }
        : {};

    authorPopulate.avatar = true;

    return {
      ...populateObject,
      featuredImage: populateObject.featuredImage === undefined ? true : populateObject.featuredImage,
      category: populateObject.category === undefined ? true : populateObject.category,
      author: {
        ...authorConfig,
        populate: authorPopulate,
      },
    };
  };

  if (!populate) {
    ctx.query = {
      ...ctx.query,
      populate: addEssentialPopulate(),
    };
    return;
  }

  if (typeof populate === 'string') {
    if (populate === '*') {
      ctx.query.populate = {
        '*': true,
        ...addEssentialPopulate(),
      };
      return;
    }

    const populateParts = new Set(
      populate
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
    );

    populateParts.add('featuredImage');
    populateParts.add('category');
    populateParts.add('author.avatar');

    ctx.query.populate = Array.from(populateParts).join(',');
    return;
  }

  if (Array.isArray(populate)) {
    const populateSet = new Set(populate);
    populateSet.add('featuredImage');
    populateSet.add('category');
    populateSet.add('author.avatar');
    ctx.query.populate = Array.from(populateSet);
    return;
  }

  if (typeof populate === 'object') {
    const hasStar = Object.prototype.hasOwnProperty.call(populate, '*');

    ctx.query.populate = {
      ...(hasStar ? { '*': populate['*'] } : {}),
      ...addEssentialPopulate(populate),
    };
  }
};

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  async find(ctx) {
    ensureEssentialPopulate(ctx);
    return await super.find(ctx);
  },

  async findOne(ctx) {
    ensureEssentialPopulate(ctx);
    return await super.findOne(ctx);
  },
}));
