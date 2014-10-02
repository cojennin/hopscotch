hopscotch.controller("BottleAddController", ['$scope', 'ResourceFactory', 'distilleries', function($scope, ResourceFactory, distilleries) {
    var BottleService = new ResourceFactory('/bottle');
    $scope.distilleries = distilleries.data;

    $scope.submit = function(bottle) {
        BottleService.save(bottle);
    };

}]);