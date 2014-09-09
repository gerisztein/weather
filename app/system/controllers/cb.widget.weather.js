(function() {
    'use strict';

    angular.module('cbApp.controllers.widget', [])
        .controller('widgetWeatherCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
            $scope.getTemp = function(city, unit, lang) {

                // Define default values
                var a = city,
                    b = unit || 'metric',
                    c = lang || 'en';

                $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + a + '&units=' + b + '&lang=' + c
                }).success(function(data) {

                    // Attribute specific data to variables into the scope
                    $scope.icon = data.weather[0].icon;
                    $scope.city = data.name;
                    $scope.description = $filter('camelcase')(data.weather[0].description);
                    $scope.temperature = data.main.temp;
                    $scope.unit = b;
                    $scope.image = 'public/images/' + $filter('lowercase')($filter('nospace')(data.name, '-')) + '.jpg';

                });
            }
        }]);
})();