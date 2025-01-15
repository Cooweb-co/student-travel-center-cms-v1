module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("R2_ACCESS_KEY_ID"),
        secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
        endpoint: `https://${env("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,
        params: {
          Bucket: env("R2_BUCKET"),
        },
        cloudflarePublicAccessUrl: env("R2_PUBLIC_URL"),
        pool: false,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});