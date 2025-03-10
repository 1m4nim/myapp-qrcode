// next.config.js

module.exports = {
    experimental: {
        turboMode: true,  // この設定は無効
        reactMode: 'concurrent', // Reactの同時実行モード
    },
    reactStrictMode: true, // 開発モードでの厳格なチェック
    // その他の設定...
};
