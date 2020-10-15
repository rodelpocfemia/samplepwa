// vue.config.js
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//    .BundleAnalyzerPlugin;

module.exports = {
    
    // ...other vue-cli plugin options...
    
    pwa: {
        name: 'samplepwa',
        themeColor: '#17a2b8',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',

        //configure the workbox plugin
        manifestPath: 'manifest.json',

        workboxPluginMode: 'InjectManifest', //'GenerateSW', //s
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'service-worker.js',
            exclude: [/\.map$/, /_redirects/], //fix for netlify pwa error - bad-precaching-response: bad-precaching-response
            // ...other Workbox options...
        },
        
        
        iconPaths: {
            msTileImage: 'img/icons/android-chrome-192x192.png'
        }
    }
}