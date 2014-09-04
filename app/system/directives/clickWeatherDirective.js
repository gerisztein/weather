app.directive('clickWeather', [function ($scope, $http) {
	return {
		restrict: 'E',
		replace: true,
		controller: 'clickWeatherController',
		transclude: true,
		scope: {
			cidade: '@city',
			unidade: '=unit',
			idioma: '=lang',
		},
		templateUrl: 'system/views/widget.html',
		link: function(scope, element, attr) {
			var city = attr.city,
				unit = attr.unit,
				lang = attr.lang;
			// console.log(scope.cidade);
			// console.log(controller);
			//controller.getTemp(city, unit, lang);
     	}
   };
}]);