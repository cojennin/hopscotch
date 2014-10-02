hopscotch.controller("HeaderController", ['$scope', '$location', function($scope, $location) {
    $scope.location = $location;
    $scope.nav = {
        'active': $location.path().substr(1)
    };

    $scope.$on('$routeChangeSuccess', function(event, route) {
        $scope.nav.active = $scope.location.path().substr(1);
    });
}]);