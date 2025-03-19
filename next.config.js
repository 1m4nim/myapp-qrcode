module.exports = {
    experimental: {
        appDir: false, // App Router の影響を無効化
    },
    compiler: {
        reactRemoveProperties: true,
        removeConsole: true,
    },
};
