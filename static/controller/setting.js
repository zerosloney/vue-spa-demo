define(function (require, exports, module) {
    var controller = {},
        vue = require('vue'),
        tpl = require('text!view/setting.html'),
        model = require('model/setting');

    controller.index = vue.extend({
        data: function () {
            return model;
        },
        template: tpl,
        methods:{
            save:function (event) {
                var self = this;
                console.log('你的手机号码： ' + self.phone + '!')
            }
        }
    });
    return controller;
});