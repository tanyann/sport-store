angular.module("sportStore", ["customFilter","cart", "ngRoute"])
    .config(function($routeProvider){


        $routeProvider.when("/placeorder",{
            templateUrl: "views/placeorder.html"
        });

        $routeProvider.when("/checkout",{
            templateUrl: "views/checkoutSummary.html"
        });

        $routeProvider.when("/products",{
            templateUrl: "views/productList.html"
        });

        $routeProvider.otherwise({
            templateUrl: "views/productList.html"
        });

    });