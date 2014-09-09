(function() {
    'use strict';
    angular.module('cbApp.WidgetWeather', [])
        .directive('widgetWeather', function () {
        
        return {
            controller: 'widgetWeatherCtrl',
            replace: true,
            restrict: 'A',
            templateUrl: 'system/views/_cbWidgetWeather.html',
            scope: {},
            link: function(scope, element, attr) {
                var city = attr.city,
                    unit = attr.unit,
                    lang = attr.lang;
                scope.getTemp(city, unit, lang);
            }
        };
    
    });

})();