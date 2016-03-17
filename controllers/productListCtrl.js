var myApp = angular.module("sportStore");

myApp.constant("productListActiveClass", "btn-primary").constant("productListPageCount", 2)
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass){

    var selectedCategory = null;


    $scope.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
    }

    $scope.categoryFilterFn = function (product) {
        return selectedCategory == null ||
        product.category == selectedCategory;
    }

    $scope.getCategoryClass= function (category) {
        return selectedCategory == category ? productListActiveClass: "";
    }

    $scope.selectPage= function(newPage){
        $scope.selectPage = newPage;
    }

    $scope.getPageClass = function(page){
        return $scope.selectedPage() == page ? productLisctActiveClass : "";
    }
});