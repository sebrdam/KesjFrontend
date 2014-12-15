/**
 * Created by kbos on 10-12-2014.
 */
'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var kesjApp = angular.module('KESJ', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/components', {
                templateUrl: 'partials/components.html',
                controller: componentsController
            }).
            when('/products/:productSku', {
                templateUrl: 'partials/product.htm',
                controller: storeController
            }).
            when('/cart', {
                templateUrl: 'partials/shoppingCart.htm',
                controller: storeController
            }).
            otherwise({
                redirectTo: '/store'
            });
    }]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
kesjApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});