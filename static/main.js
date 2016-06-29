require.config({
    baseUrl: 'static/',
    shim: {
        underscore: {
            exports: '_'
        }
    },
    paths: {
        jquery: 'vendor/jquery-min',
        text: 'vendor/text-min',
        underscore: 'vendor/underscore-min',
        vue:'vendor/vue-min',
        vue_router:'vendor/vue-router-min'
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require(['controller/router','vue'],function (router,vue) {
    var App = vue.extend({});
    router.start(App,'#wrap');
});