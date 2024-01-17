
// const nextIntlConfig = withNextIntl();

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextIntlConfig(nextConfig) 

const withNextIntl = require("next-intl/plugin")("./i18n.ts");
module.exports = withNextIntl({
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.node = {
                __dirname: true,
            };
        }

        return config;
    },
});