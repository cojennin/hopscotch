hopscotch.controller("BottleListController", ['$scope', 'bottles', function($scope, bottles) {
    $scope.bottles = bottles.data;
}]);