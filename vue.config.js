const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: './',
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.0.0.76:8080', // Target server address
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' // If the target server's API path includes the /api prefix, use this configuration to remove it
                }
            }
        }
    }
})
