//Exists solely to append and remove
//type-ahead element
hopscotch.directive('typeAhead', ['$compile', '$http', function($compile, $http) {
    return {
        restrict: 'A',
        scope: {
            url: '=',
            label: '='
        },
        link: function($scope, $el, attrs) {
            $el.bind("keydown keypress", function() {
                $http.get($scope.url).then(function(items) {
                    $scope.items = items.data;
                });
            });

            $el.after($compile('<div type-ahead-dropdown items="items" label="' + $scope.label + '"></div>')($scope));
        }
    }
}]).directive('typeAheadDropdown', [function(){
    return {
        restrict: 'A',
        scope: {
            items: '=',
            label: '@'
        },
        link: function($scope, $el, attrs) {
        },
        template:
            '<ul>' +
                '<li ng-repeat="item in items">{{item[label]}}</li>' +
            '</ul>'
    }
}]);