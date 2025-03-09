module.exports = {
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            'rc-util': require.resolve('rc-util/es'),
        };
        return config;
    },
};
