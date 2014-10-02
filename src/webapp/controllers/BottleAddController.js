hopscotch.controller("BottleAddController", ['$scope', 'ResourceFactory', function($scope) {
    var BottleService = ResourceFactory('/bottle');

    $scope.submit = function(bottle) {
        BottleService.save(bottle);
    };

}]);