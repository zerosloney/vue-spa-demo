({
    appDir: './',
    baseUrl: './static',
    dir: './dist',
    modules: [
        {
            name: 'main'
        }
    ],
    fileExclusionRegExp: /^(r|config)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        jquery: 'vendor/jquery-min',
        text: 'vendor/text-min',
        underscore: 'vendor/underscore-min',
        vue:'vendor/vue-min',
        vue_router:'vendor/vue-router-min'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
})