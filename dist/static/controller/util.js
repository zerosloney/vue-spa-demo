define(["require","exports","module","knockout","jquery"],function(e,n,r){var o=e("knockout"),u=e("jquery"),i={el:"#wrap",bind:function(e){var n=u(i.el)[0];o.cleanNode(n),o.applyBindings(e,n)}};return i});