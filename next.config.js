// next.config.js
module.exports = {
    experimental: {
        turboMode: true, // Turbopackを有効にする
    },
    webpack: (config) => {
        // Webpackに関連するカスタム設定を削除
        return config;
    }
};
