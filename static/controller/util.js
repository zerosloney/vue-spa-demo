define(function (require, exports, module) {
    var ko = require('knockout');
    var $ = require('jquery');
    var util = {
        el: '#wrap',
        bind: function (model) {
            var element = $(util.el)[0];
            ko.cleanNode(element);
            ko.applyBindings(model, element);
        }
    };
    return util;
});