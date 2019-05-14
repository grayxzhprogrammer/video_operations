var openInEditor = require('launch-editor-middleware')
module.exports = {
    baseUrl: './',
    productionSourceMap: false,
    devServer: {
        before (app) {
            app.use('/__open-in-editor', openInEditor())
        },
        proxy: {
            '/api':{
                target:'http://jsonplaceholder.typicode.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            },
            '/ms':{
                target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
                changeOrigin: true
            }
        }
    }
}
