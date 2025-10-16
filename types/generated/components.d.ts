import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogAuthor extends Schema.Component {
  collectionName: 'components_blog_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    avatar: Attribute.Media;
    role: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.author': BlogAuthor;
    }
  }
}
