// function Weather($scope, $http) {
//     $http.get('http://api.openweathermap.org/data/2.5/weather?q=Sao+Paulo,BR').
//         success(function(data) {
//             $scope.weather = data;
//         });
// }
function Weather($scope, $http) {
	$http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?q=Sao+Paulo,BR&units=metric&lang=pt'})
	.success(function(data) {
		$scope.weather = data;
	})
	.error(function(data) {
		console.log(data);
	});
}