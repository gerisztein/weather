var app = angular.module('clickWeatherWidget', []);
app.directive('clickWeather', [function ($scope, $http) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'system/views/widget.html',
		controller: ['$scope', '$http', function($scope, $http) {
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
	        		$scope.description = data.weather[0].description;
	        		$scope.temperature = data.main.temp;
	        		$scope.unit = b;
	        		
	          	});
	        }
	    }],
		link: function(scope, element, attr) {
			var city = attr.city,
				unit = attr.unit,
				lang = attr.lang;
			scope.getTemp(city, unit, lang);
     	}
   };
}])

.directive('clickWeatherForecast', [function ($scope, $http) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'system/views/forecast.html',
		controller: ['$scope', '$http', function($scope, $http) {
	    	$scope.getTemp = function(city, unit, lang, count) {
	    		
	    		// Define default values
	    		var a = city,
	    		    b = unit || 'metric',
	    		    c = lang || 'en';
                    d = count || '5';
	    		
	        	$http({
	          		method: 'GET',
	          		url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + a + '&units=' + b + '&lang=' + c + '&cnt=' + d
	        	}).success(function(data) {
	        		
	        		// Attribute specific data to variables into the scope
                    console.log(data);
                    // Today
                    $scope.description = data.list[0].weather[0].description;
                    $scope.icon = data.list[0].weather[0].icon;
                    $scope.city = data.city.name;
                    $scope.forecast = data.list;
                    $scope.unit = unit;
	          	});
	        }
	    }],
		link: function(scope, element, attr) {
			scope.getTemp(attr.city, attr.unit, attr.lang, attr.count);
     	}
   };
}]);