hopscotch.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/bottles', {
            templateUrl: 'templates/list-bottles.html',
            controller: 'BottleListController',
            resolve: {
                bottles: function(ResourceFactory) {
                    var BottleService = new ResourceFactory('/bottles');

                    return BottleService.find();
                }
            }
        })
        .when('/add-bottle', {
            templateUrl: 'templates/add-bottle.html',
            controller: 'BottleAddController'
        })
        .when('/distilleries', {
            templateUrl: 'templates/list-distilleries.html',
            controller: 'DistilleryListController'
        })
        .when('/add-distillery', {
            templateUrl: 'templates/add-distillery.html',
            controller: 'DistilleryAddController'
        })
        .otherwise({redirectTo: '/bottles'});
});