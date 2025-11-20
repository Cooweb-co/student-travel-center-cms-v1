'use strict';

/**
 * blog-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const ensureAuthorAvatarPopulate = (ctx) => {
  const populate = ctx.query?.populate;

  const normalizedPopulate =
    populate && typeof populate === 'object' && !Array.isArray(populate)
      ? { ...populate }
      : {};

  const authorConfig =
    normalizedPopulate.author && typeof normalizedPopulate.author === 'object' && !Array.isArray(normalizedPopulate.author)
      ? { ...normalizedPopulate.author }
      : {};

  const authorPopulate =
    authorConfig.populate && typeof authorConfig.populate === 'object' && !Array.isArray(authorConfig.populate)
      ? { ...authorConfig.populate }
      : {};

  authorPopulate.avatar = true;

  if (normalizedPopulate.featuredImage === undefined) {
    normalizedPopulate.featuredImage = true;
  }

  normalizedPopulate.author = {
    ...authorConfig,
    populate: authorPopulate,
  };

  ctx.query = {
    ...ctx.query,
    populate: normalizedPopulate,
  };
};

module.exports = createCoreController('api::blog-post.blog-post', ({ strapi }) => ({
  async find(ctx) {
    ensureAuthorAvatarPopulate(ctx);
    return await super.find(ctx);
  },

  async findOne(ctx) {
    ensureAuthorAvatarPopulate(ctx);
    return await super.findOne(ctx);
  },
}));
