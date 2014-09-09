(function() {
    'use strict';
	angular.module('cbApp.noSpace', [])
	.filter('nospace', function () {
	    return function (value, replace) {
	        replace = replace || '';
	        return (!value) ? '' : value.replace(/ /g, replace);
	    }
	});
})();