var app = angular.module("sportStore");

app.controller("sportStoreCtrl", function($scope){
    $scope.data= {
        products:
            [
                {"category":"Watersport","description":"a boat for one person","name":"Kayak","price":275,"id":"05af9239384f87c87"},
                {"category":"Watersport","description":"a boat for one person","name":"Kayaka","price":315,"id":"98jhskjdhfds87sd7"},
                {"category":"Watersport","description":"a boat for one person","name":"Kayakaa","price":100,"id":"643hjgjhg34hgkfhg"},
                {"category":"Soccer","description":"Falt-packed 35,0000-seat stadium","name":"Stadium","price":7950000,"id":"ad4e64b38baa088f"},
                {"category":"Chess","description":"Improve your brain efficiency by 75%","name":"Thinking Cap","price":16,"id":"b9e855c1eecc0b63"},
                {"category":"Chess","description":"Secretly give your opponent a disadvantage","name":"Unsteady Chair","price":29.95,"id":"32c2355f9a617bbd"}
            ]
    };
});