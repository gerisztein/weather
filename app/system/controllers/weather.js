function Weather($scope, $http) {
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=Sao+Paulo,BR').
        success(function(data) {
            $scope.weather = data;
        });
}