define(function (require, exports, module) {

    var product = function (id, name, price) {
        var self = this;
        self.productId = id;
        self.productName = name;
        self.productPrice = price;
    };
    var products = [new product(1, '2', 2.0), new product(1, '2', 2.0)];



    return {product: product, products: products};
});
