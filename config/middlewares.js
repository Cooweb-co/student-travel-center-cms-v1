module.exports = ({ env }) => [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("R2_PUBLIC_URL") ? env("R2_PUBLIC_URL").replace(/^https?:\/\//, "") : "",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("R2_PUBLIC_URL") ? env("R2_PUBLIC_URL").replace(/^https?:\/\//, "") : "",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
