//$resource does too much too wrongly
hopscotch.factory('ResourceFactory', ['$http', 'PATH', function($http, PATH) {
    return function(route) {
        route = PATH.apiPath + route;

        this.get = function(id) {
            return $http.get(route + '/' + id);
        };

        this.save = function(obj) {
            return $http.post(route, obj);
        };

        this.find = function(obj) {
            var config = {};

            if (typeof obj !== 'undefined') {
                config.params = obj;
            }
            return $http.get(route, config);
        }
    }
}]);