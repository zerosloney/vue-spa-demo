define(function (require, exports, module) {
    var controller = {},
        vue = require('vue'),
        tpl = require('text!view/login.html'),
        model = require('model/login');

    controller.index = vue.extend({
        data: function () {
            return model;
        },
        template: tpl,
        methods:{
            login:function (event) {
                var self = this;
                console.log('你的手机号码： ' + self.phone + '!')
            }
        }
    });
    return controller;
});