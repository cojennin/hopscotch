hopscotch.controller("DistilleryAddController", ['$scope', 'ResourceFactory', function($scope, ResourceFactory) {
    var BottleService = new ResourceFactory('/distilleries');

    $scope.submit = function(bottle) {
        BottleService.save(bottle);
    };
}]);