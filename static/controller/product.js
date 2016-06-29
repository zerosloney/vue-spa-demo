define(function (require, exports, module) {

    var controller = {},
        vue = require('vue'),
        model = require('model/product');
    controller.list = vue.extend({
        data: function () {
            return {products: model.products};
        },
        template: require('text!view/product.html'),
        methods:{
            go:function (item) {
                console.log(item.productId);
                location.href = '#!/product/edit/'+item.productId;
            },
            remove:function (item) {
              this.products.$remove(item);
            }
        }
    });
    controller.add = vue.extend({
        data: function () {
            return { product: new model.product('', '', 0)};
        },
        template: require('text!view/product_add.html'),
        methods: {
            save: function (item) {
                console.log(item.productId);
            }
        }
    });
    controller.edit = vue.extend({
        data: function () {
            return {product: new model.product(this.$route.params.id, '11', 22)};
        },
        template: require('text!view/product_add.html'),
        methods: {
            save: function (item) {
                console.log(item.productId);
            }
        }
    });
    return controller;
});