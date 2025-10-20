import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedAuthor extends Schema.Component {
  collectionName: 'shared_authors';
  info: {
    displayName: 'Author';
    description: 'Informaci\u00F3n del autor de una publicaci\u00F3n';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    avatar: Attribute.Media & Attribute.Required;
    role: Attribute.String;
    bio: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.author': SharedAuthor;
    }
  }
}
