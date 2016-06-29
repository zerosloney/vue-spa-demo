define(function (require, exports, module) {

    var vue = require('vue');
    var VueRouter = require('vue_router');
    vue.use(VueRouter);
    var router = new VueRouter(),
        home = require('controller/home'),
        login = require('controller/login'),
        setting = require('controller/setting'),
        product = require('controller/product');


    router.map({
        '': {
            component: home.index
        },
        '/login': {
            component: login.index
        },
        '/product': {
            component: product.list,
            subRoutes: {
                '/edit': {
                    component: product.add
                },
                '/edit/:id': {
                    component: product.edit
                }
            }
        },
        '/setting':{
            component: setting.index
        }
    });
    return router;

});
