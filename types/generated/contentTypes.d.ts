import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAbuDhabiAbuDhabi extends Schema.CollectionType {
  collectionName: 'abu_dhabis';
  info: {
    singularName: 'abu-dhabi';
    pluralName: 'abu-dhabis';
    displayName: 'Abu Dhabi';
    description: 'Informaci\u00F3n detallada sobre Abu Dhabi como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Abu Dhabi'>;
    slug: Attribute.UID<'api::abu-dhabi.abu-dhabi', 'title'> &
      Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Abu Dhabi?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Capital Cultural'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Centro cultural y pol\u00EDtico de los Emiratos \u00C1rabes Unidos'>;
    hospitalityIcon: Attribute.String &
      Attribute.DefaultTo<'\uD83C\uDFDB\uFE0F'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n de Excelencia'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Universidades internacionales y centros de investigaci\u00F3n'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    cultureTitle: Attribute.String &
      Attribute.DefaultTo<'Tradici\u00F3n \u00C1rabe'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Inmersi\u00F3n en la rica cultura \u00E1rabe e isl\u00E1mica'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDD4C'>;
    languageTitle: Attribute.String &
      Attribute.DefaultTo<'Idiomas M\u00FAltiples'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Aprende \u00E1rabe e ingl\u00E9s en un entorno multicultural'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Infraestructura moderna y servicios de primera clase'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFD9\uFE0F'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas multinacionales y sector p\u00FAblico'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Abu Dhabi en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Abu Dhabi'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Abu Dhabi'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::abu-dhabi.abu-dhabi',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::abu-dhabi.abu-dhabi',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAustraliaAustralia extends Schema.CollectionType {
  collectionName: 'australias';
  info: {
    singularName: 'australia';
    pluralName: 'australias';
    displayName: 'Australia';
    description: 'Informaci\u00F3n detallada sobre Australia como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Australia'>;
    slug: Attribute.UID<'api::australia.australia', 'title'> &
      Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Australia?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n de Clase Mundial'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Universidades de prestigio internacional'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    educationTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Uno de los mejores pa\u00EDses para vivir en el mundo'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFE0'>;
    cultureTitle: Attribute.String & Attribute.DefaultTo<'Cultura \u00DAnica'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Mezcla \u00FAnica de culturas europeas e ind\u00EDgenas'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF0F'>;
    languageTitle: Attribute.String & Attribute.DefaultTo<'Idioma Ingl\u00E9s'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Ingl\u00E9s como idioma oficial en un entorno multicultural'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String &
      Attribute.DefaultTo<'Naturaleza \u00DAnica'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Fauna y flora \u00FAnicas en el mundo'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83E\uDD98'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas multinacionales y startups'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Australia en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Australia'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Australia'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::australia.australia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::australia.australia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCanadaCanada extends Schema.CollectionType {
  collectionName: 'canadas';
  info: {
    singularName: 'canada';
    pluralName: 'canadas';
    displayName: 'Canada';
    description: 'Informaci\u00F3n detallada sobre Canad\u00E1 como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Canada'>;
    slug: Attribute.UID<'api::canada.canada', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Canad\u00E1?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n de Excelencia'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Universidades de prestigio mundial con costos accesibles'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    educationTitle: Attribute.String & Attribute.DefaultTo<'Multiculturalismo'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Pa\u00EDs que celebra la diversidad cultural'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF0D'>;
    cultureTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Uno de los mejores pa\u00EDses para vivir en el mundo'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFE0'>;
    languageTitle: Attribute.String & Attribute.DefaultTo<'Idiomas Oficiales'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Ingl\u00E9s y franc\u00E9s como idiomas oficiales'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String &
      Attribute.DefaultTo<'Naturaleza \u00DAnica'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Desde monta\u00F1as hasta oc\u00E9anos, naturaleza espectacular'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFD4\uFE0F'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas multinacionales y startups'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Canad\u00E1 en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Canad\u00E1'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Canad\u00E1'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::canada.canada',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::canada.canada',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDubaiDubai extends Schema.CollectionType {
  collectionName: 'dubais';
  info: {
    singularName: 'dubai';
    pluralName: 'dubais';
    displayName: 'Dubai';
    description: 'Informaci\u00F3n detallada sobre Dubai como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Dubai'>;
    slug: Attribute.UID<'api::dubai.dubai', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Dubai?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Centro Comercial Global'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Hub de negocios y comercio en el Medio Oriente'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFE2'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n Internacional'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Universidades de prestigio mundial'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    cultureTitle: Attribute.String &
      Attribute.DefaultTo<'Fusi\u00F3n Cultural'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Mezcla \u00FAnica de tradici\u00F3n \u00E1rabe y modernidad'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF0F'>;
    languageTitle: Attribute.String &
      Attribute.DefaultTo<'Idiomas M\u00FAltiples'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'\u00C1rabe, ingl\u00E9s y m\u00E1s de 200 idiomas'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String & Attribute.DefaultTo<'Lujo y Modernidad'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Infraestructura de clase mundial'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFD9\uFE0F'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas multinacionales y startups'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Dubai en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Dubai'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Dubai'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dubai.dubai',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dubai.dubai',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHongKongHongKong extends Schema.CollectionType {
  collectionName: 'hong_kongs';
  info: {
    singularName: 'hong-kong';
    pluralName: 'hong-kongs';
    displayName: 'Hong Kong';
    description: 'Informaci\u00F3n detallada sobre Hong Kong como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Hong Kong'>;
    slug: Attribute.UID<'api::hong-kong.hong-kong', 'title'> &
      Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Hong Kong?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Centro Financiero Global'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Oportunidades en el coraz\u00F3n financiero de Asia'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFE6'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n de Clase Mundial'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Universidades de prestigio internacional'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    cultureTitle: Attribute.String &
      Attribute.DefaultTo<'Fusi\u00F3n Cultural'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Mezcla \u00FAnica de tradici\u00F3n china y modernidad occidental'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF0F'>;
    languageTitle: Attribute.String &
      Attribute.DefaultTo<'Idiomas M\u00FAltiples'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Ingl\u00E9s, canton\u00E9s y mandar\u00EDn en un solo lugar'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Infraestructura moderna y servicios de primera'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFD9\uFE0F'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas multinacionales y startups'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Hong Kong en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Hong Kong'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Hong Kong'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hong-kong.hong-kong',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hong-kong.hong-kong',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIrelandIreland extends Schema.CollectionType {
  collectionName: 'irelands';
  info: {
    singularName: 'ireland';
    pluralName: 'irelands';
    displayName: 'Ireland';
    description: 'Informaci\u00F3n detallada sobre Irlanda como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Irlanda'>;
    slug: Attribute.UID<'api::ireland.ireland', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Irlanda?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Hospitalidad Irlandesa'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Experiencia en pubs tradicionales y hoteles boutique'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF7A'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n Internacional'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Estudios en instituciones reconocidas mundialmente'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    cultureTitle: Attribute.String & Attribute.DefaultTo<'Cultura \u00DAnica'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Inmersi\u00F3n en la rica herencia celta y moderna'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF0D'>;
    languageTitle: Attribute.String &
      Attribute.DefaultTo<'Ingl\u00E9s como Idioma'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Mejora tu ingl\u00E9s en un entorno nativo'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCAC'>;
    qualityTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Pa\u00EDs con alto nivel de vida y seguridad'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFE0'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Laborales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Acceso al mercado laboral europeo'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Irlanda en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Irlanda'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Irlanda'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ireland.ireland',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ireland.ireland',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMaldiveMaldive extends Schema.CollectionType {
  collectionName: 'maldives';
  info: {
    singularName: 'maldive';
    pluralName: 'maldives';
    displayName: 'Maldives';
    description: 'Informaci\u00F3n detallada sobre Maldivas como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Maldives'>;
    slug: Attribute.UID<'api::maldive.maldive', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Maldivas?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String & Attribute.DefaultTo<'Turismo de Lujo'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Experiencia en resorts de clase mundial'>;
    hospitalityIcon: Attribute.String &
      Attribute.DefaultTo<'\uD83C\uDFD6\uFE0F'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Conservaci\u00F3n Marina'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Aprendizaje sobre ecosistemas marinos \u00FAnicos'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDC20'>;
    cultureTitle: Attribute.String &
      Attribute.DefaultTo<'Cultura Isl\u00E1mica'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Inmersi\u00F3n en la cultura isl\u00E1mica del oc\u00E9ano \u00CDndico'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDD4C'>;
    languageTitle: Attribute.String & Attribute.DefaultTo<'Idiomas Locales'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Aprende dhivehi e ingl\u00E9s en un para\u00EDso tropical'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String &
      Attribute.DefaultTo<'Para\u00EDso Natural'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Playas v\u00EDrgenes y arrecifes de coral \u00FAnicos'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF0A'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Hospitalidad Premium'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Oportunidades en el sector tur\u00EDstico de lujo'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\u2B50'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Maldivas en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Maldivas'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Maldivas'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::maldive.maldive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::maldive.maldive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMaltaMalta extends Schema.CollectionType {
  collectionName: 'maltas';
  info: {
    singularName: 'malta';
    pluralName: 'maltas';
    displayName: 'Malta';
    description: 'Informaci\u00F3n detallada sobre Malta como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Malta'>;
    slug: Attribute.UID<'api::malta.malta', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Malta?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Historia Mediterr\u00E1nea'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Isla con 7,000 a\u00F1os de historia y cultura'>;
    hospitalityIcon: Attribute.String &
      Attribute.DefaultTo<'\uD83C\uDFDB\uFE0F'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n en Ingl\u00E9s'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n de calidad en ingl\u00E9s como idioma oficial'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    cultureTitle: Attribute.String &
      Attribute.DefaultTo<'Cultura Mediterr\u00E1nea'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Mezcla \u00FAnica de culturas europeas y \u00E1rabes'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF0A'>;
    languageTitle: Attribute.String &
      Attribute.DefaultTo<'Idiomas M\u00FAltiples'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Ingl\u00E9s, malt\u00E9s e italiano en un solo lugar'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Excelente clima y calidad de vida mediterr\u00E1nea'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\u2600\uFE0F'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas europeas y sector tur\u00EDstico'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Malta en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Malta'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Malta'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::malta.malta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::malta.malta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPraguePrague extends Schema.CollectionType {
  collectionName: 'pragues';
  info: {
    singularName: 'prague';
    pluralName: 'pragues';
    displayName: 'Prague';
    description: 'Informaci\u00F3n detallada sobre Praga como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Prague'>;
    slug: Attribute.UID<'api::prague.prague', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Praga?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Historia Milenaria'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Ciudad medieval perfectamente conservada'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFF0'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n de Calidad'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Universidades de prestigio con costos accesibles'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    cultureTitle: Attribute.String & Attribute.DefaultTo<'Cultura Bohemia'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Arte, m\u00FAsica y literatura de clase mundial'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFAD'>;
    languageTitle: Attribute.String & Attribute.DefaultTo<'Idiomas Europeos'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Aprende checo, ingl\u00E9s y otros idiomas europeos'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Excelente relaci\u00F3n calidad-precio en Europa'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFE0'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas europeas y startups'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Praga en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Praga'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Praga'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::prague.prague',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::prague.prague',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQatarQatar extends Schema.CollectionType {
  collectionName: 'qatars';
  info: {
    singularName: 'qatar';
    pluralName: 'qatars';
    displayName: 'Qatar';
    description: 'Informaci\u00F3n detallada sobre Qatar como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Qatar'>;
    slug: Attribute.UID<'api::qatar.qatar', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Qatar?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Hospitalidad de Lujo'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Experiencia en los hoteles m\u00E1s prestigiosos del Medio Oriente'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\u2B50'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Eventos Internacionales'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Participaci\u00F3n en la organizaci\u00F3n de eventos deportivos y culturales'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFC6'>;
    cultureTitle: Attribute.String &
      Attribute.DefaultTo<'Desarrollo Profesional'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Formaci\u00F3n en est\u00E1ndares internacionales de servicio'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCC8'>;
    languageTitle: Attribute.String & Attribute.DefaultTo<'Paquete Completo'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Alojamiento y transporte incluidos en la mayor\u00EDa de posiciones'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCE6'>;
    qualityTitle: Attribute.String &
      Attribute.DefaultTo<'Ambiente Multicultural'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Trabajo con profesionales de todo el mundo'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF0D'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Beneficios Atractivos'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Salario libre de impuestos y bonificaciones'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCB0'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Qatar en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Qatar'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Qatar'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::qatar.qatar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::qatar.qatar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpainSpain extends Schema.CollectionType {
  collectionName: 'spains';
  info: {
    singularName: 'spain';
    pluralName: 'spains';
    displayName: 'Spain';
    description: 'Informaci\u00F3n detallada sobre Espa\u00F1a como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Spain'>;
    slug: Attribute.UID<'api::spain.spain', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Espa\u00F1a?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String & Attribute.DefaultTo<'Cultura Rica'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Pa\u00EDs con rica historia y tradiciones culturales'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFAD'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n de Calidad'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Universidades de prestigio con costos accesibles'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    cultureTitle: Attribute.String & Attribute.DefaultTo<'Idioma Espa\u00F1ol'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Espa\u00F1ol como idioma oficial en su cuna'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    languageTitle: Attribute.String &
      Attribute.DefaultTo<'Clima Mediterr\u00E1neo'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Excelente clima y calidad de vida mediterr\u00E1nea'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\u2600\uFE0F'>;
    qualityTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Excelente calidad de vida y servicios p\u00FAblicos'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFE0'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas europeas y startups'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Espa\u00F1a en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Espa\u00F1a'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Espa\u00F1a'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::spain.spain',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::spain.spain',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiThailandThailand extends Schema.CollectionType {
  collectionName: 'thailands';
  info: {
    singularName: 'thailand';
    pluralName: 'thailands';
    displayName: 'Thailand';
    description: 'Informaci\u00F3n detallada sobre Tailandia como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Thailand'>;
    slug: Attribute.UID<'api::thailand.thailand', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Tailandia?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Hospitalidad Tailandesa'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Experiencia en la famosa hospitalidad tailandesa y turismo'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDE4F'>;
    educationTitle: Attribute.String & Attribute.DefaultTo<'Cultura Rica'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Inmersi\u00F3n en una de las culturas m\u00E1s fascinantes del mundo'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFDB\uFE0F'>;
    cultureTitle: Attribute.String & Attribute.DefaultTo<'Costo de Vida Bajo'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Excelente relaci\u00F3n calidad-precio para vivir y estudiar'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCB0'>;
    languageTitle: Attribute.String &
      Attribute.DefaultTo<'Aprendizaje de Idiomas'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Mejora tu ingl\u00E9s y aprende tailand\u00E9s b\u00E1sico'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String &
      Attribute.DefaultTo<'Aventura y Naturaleza'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Playas paradis\u00EDacas, monta\u00F1as y selvas tropicales'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFDD\uFE0F'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades de Negocio'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Centro de negocios en el sudeste asi\u00E1tico'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Tailandia en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Tailandia'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Tailandia'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::thailand.thailand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::thailand.thailand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUnitedKingdomUnitedKingdom extends Schema.CollectionType {
  collectionName: 'united_kingdoms';
  info: {
    singularName: 'united-kingdom';
    pluralName: 'united-kingdoms';
    displayName: 'United Kingdom';
    description: 'Informaci\u00F3n detallada sobre Reino Unido como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'United Kingdom'>;
    slug: Attribute.UID<'api::united-kingdom.united-kingdom', 'title'> &
      Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Reino Unido?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Historia Milenaria'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Pa\u00EDs con rica historia y tradiciones ancestrales'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFF0'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n de Excelencia'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Universidades de prestigio mundial'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    cultureTitle: Attribute.String &
      Attribute.DefaultTo<'Cultura Brit\u00E1nica'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Inmersi\u00F3n en la cultura brit\u00E1nica y europea'>;
    cultureIcon: Attribute.String &
      Attribute.DefaultTo<'\uD83C\uDDEC\uD83C\uDDE7'>;
    languageTitle: Attribute.String & Attribute.DefaultTo<'Idioma Ingl\u00E9s'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Ingl\u00E9s como idioma oficial en su cuna'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Excelente calidad de vida y servicios p\u00FAblicos'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFE0'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas multinacionales y startups'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Reino Unido en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas del Reino Unido'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Reino Unido'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::united-kingdom.united-kingdom',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::united-kingdom.united-kingdom',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUnitedStateUnitedState extends Schema.CollectionType {
  collectionName: 'united_states';
  info: {
    singularName: 'united-state';
    pluralName: 'united-states';
    displayName: 'United States';
    description: 'Informaci\u00F3n detallada sobre Estados Unidos como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'United States'>;
    slug: Attribute.UID<'api::united-state.united-state', 'title'> &
      Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Estados Unidos?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Educaci\u00F3n de Excelencia'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Universidades de prestigio mundial'>;
    hospitalityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF93'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades Profesionales'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Carrera en empresas multinacionales y startups'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    cultureTitle: Attribute.String & Attribute.DefaultTo<'Cultura Diversa'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Pa\u00EDs multicultural con diversidad \u00E9tnica'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF0D'>;
    languageTitle: Attribute.String & Attribute.DefaultTo<'Idioma Ingl\u00E9s'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Ingl\u00E9s como idioma oficial en su cuna'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String & Attribute.DefaultTo<'Calidad de Vida'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Excelente calidad de vida y servicios p\u00FAblicos'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFE0'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Innovaci\u00F3n Tecnol\u00F3gica'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Hub tecnol\u00F3gico mundial con oportunidades \u00FAnicas'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBB'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Estados Unidos en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Estados Unidos'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Estados Unidos'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::united-state.united-state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::united-state.united-state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVietnamVietnam extends Schema.CollectionType {
  collectionName: 'vietnams';
  info: {
    singularName: 'vietnam';
    pluralName: 'vietnams';
    displayName: 'Vietnam';
    description: 'Informaci\u00F3n detallada sobre Vietnam como destino de estudio y trabajo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Vietnam'>;
    slug: Attribute.UID<'api::vietnam.vietnam', 'title'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    whyChooseTitle: Attribute.String &
      Attribute.DefaultTo<'\u00BFPor qu\u00E9 elegir Vietnam?'>;
    whyChooseItems: Attribute.JSON;
    hospitalityTitle: Attribute.String &
      Attribute.DefaultTo<'Cultura Milenaria'>;
    hospitalityDescription: Attribute.String &
      Attribute.DefaultTo<'Inmersi\u00F3n en una de las culturas m\u00E1s ricas del sudeste asi\u00E1tico'>;
    hospitalityIcon: Attribute.String &
      Attribute.DefaultTo<'\uD83C\uDFDB\uFE0F'>;
    educationTitle: Attribute.String &
      Attribute.DefaultTo<'Costo de Vida Bajo'>;
    educationDescription: Attribute.String &
      Attribute.DefaultTo<'Excelente relaci\u00F3n calidad-precio para vivir y estudiar'>;
    educationIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCB0'>;
    cultureTitle: Attribute.String &
      Attribute.DefaultTo<'Gastronom\u00EDa Mundial'>;
    cultureDescription: Attribute.String &
      Attribute.DefaultTo<'Una de las cocinas m\u00E1s reconocidas internacionalmente'>;
    cultureIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDF5C'>;
    languageTitle: Attribute.String &
      Attribute.DefaultTo<'Aprendizaje de Idiomas'>;
    languageDescription: Attribute.String &
      Attribute.DefaultTo<'Mejora tu ingl\u00E9s y aprende vietnamita b\u00E1sico'>;
    languageIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDDE3\uFE0F'>;
    qualityTitle: Attribute.String &
      Attribute.DefaultTo<'Naturaleza Exuberante'>;
    qualityDescription: Attribute.String &
      Attribute.DefaultTo<'Desde monta\u00F1as hasta playas tropicales'>;
    qualityIcon: Attribute.String & Attribute.DefaultTo<'\uD83C\uDFD4\uFE0F'>;
    opportunitiesTitle: Attribute.String &
      Attribute.DefaultTo<'Oportunidades de Negocio'>;
    opportunitiesDescription: Attribute.String &
      Attribute.DefaultTo<'Econom\u00EDa en crecimiento con muchas oportunidades'>;
    opportunitiesIcon: Attribute.String & Attribute.DefaultTo<'\uD83D\uDCBC'>;
    statisticsTitle: Attribute.String &
      Attribute.DefaultTo<'Vietnam en n\u00FAmeros'>;
    statistics: Attribute.JSON;
    featuresTitle: Attribute.String &
      Attribute.DefaultTo<'Caracter\u00EDsticas de Vietnam'>;
    features: Attribute.JSON;
    travelTipsTitle: Attribute.String &
      Attribute.DefaultTo<'Tips de viaje para Vietnam'>;
    travelTips: Attribute.JSON;
    programs: Attribute.JSON;
    requirements: Attribute.JSON;
    overview: Attribute.JSON;
    highlights: Attribute.JSON;
    pricing: Attribute.JSON;
    accommodation: Attribute.JSON;
    transportation: Attribute.JSON;
    climate: Attribute.JSON;
    culture: Attribute.JSON;
    education: Attribute.JSON;
    workOpportunities: Attribute.JSON;
    visaInfo: Attribute.JSON;
    costOfLiving: Attribute.JSON;
    safety: Attribute.JSON;
    attractions: Attribute.JSON;
    events: Attribute.JSON;
    testimonials: Attribute.JSON;
    faq: Attribute.JSON;
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoKeywords: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vietnam.vietnam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vietnam.vietnam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::abu-dhabi.abu-dhabi': ApiAbuDhabiAbuDhabi;
      'api::australia.australia': ApiAustraliaAustralia;
      'api::canada.canada': ApiCanadaCanada;
      'api::dubai.dubai': ApiDubaiDubai;
      'api::hong-kong.hong-kong': ApiHongKongHongKong;
      'api::ireland.ireland': ApiIrelandIreland;
      'api::maldive.maldive': ApiMaldiveMaldive;
      'api::malta.malta': ApiMaltaMalta;
      'api::prague.prague': ApiPraguePrague;
      'api::qatar.qatar': ApiQatarQatar;
      'api::spain.spain': ApiSpainSpain;
      'api::thailand.thailand': ApiThailandThailand;
      'api::united-kingdom.united-kingdom': ApiUnitedKingdomUnitedKingdom;
      'api::united-state.united-state': ApiUnitedStateUnitedState;
      'api::vietnam.vietnam': ApiVietnamVietnam;
    }
  }
}
