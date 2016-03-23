var app = angular.module("sportStore");

app.constant("dataUrl", "http://tanyann.github.io/sport-store/products.json")
    .controller("sportStoreCtrl", function($scope, $http, dataUrl){

        $scope.data ={};

        $http.get(dataUrl)
            .success(function(data){
                $scope.data.products= data;
            })
            .error(function(error){
                $scope.data.error = error;
            })
});