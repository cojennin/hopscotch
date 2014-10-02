hopscotch.controller("BottleAddController", ['$scope', 'ResourceFactory', 'distilleries', 'PATH', function($scope, ResourceFactory, distilleries, PATH) {
    var BottleService = new ResourceFactory('/bottles');
    var DistilleryService = new ResourceFactory('/distilleries');

    $scope.distilleries = distilleries.data;
    $scope.distilleryTypeAheadPath = PATH.apiPath + '/distilleries';

    $scope.submit = function(bottle) {
        BottleService.save(bottle);
    };

}]);