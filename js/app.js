/** App Initiator **/
var app = angular.module("KESJ", ['ngRoute', 'angular.filter']);
 
/** Create multiple rows for Bootstrap Grid **/
app.filter('array', function() {
    return function(arrayLength) {
		if(!isNaN(arrayLength)) {
			arrayLength = Math.ceil(arrayLength);
			var arr = new Array(arrayLength), i = 0;
			for (; i < arrayLength; i++) {
				arr[i] = i;
			}
			return arr;
		}
    };
});

app.directive('back', ['$window', function($window) {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			elem.bind('click', function () {
				$window.history.back();
			});
		}
	};
}]);