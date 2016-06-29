define(function (require, exports, module) {
    var controller = {},
        vue = require('vue'),
        tpl = require('text!view/home.html'),
        model = require('model/home');

    controller.index = vue.extend({
        data: function () {
            return model;
        },
        template: tpl
    });
    return controller;
});
