/** Component display controller **/
app.controller("DisplayComponent", ["$scope","$http", function($scope, $http) {    
	$http.get("data/components.json").success (function(data){
		$scope.components = data;
	});
 }]);
 
 /** Display list of chosen component **/
 app.controller("ListComponents", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
	var component = $routeParams.componentName;
	$http.get("data/"+component+".json").success (function(data){
		$scope.list = data;
		$scope.currentPage = 0;
		$scope.pageSize = 5;
		$scope.data = [];
		console.log(data.length);
		$scope.numberOfPages=function(){
			return Math.ceil($scope.data.length/$scope.pageSize);                
		}
		$scope.range = function(n) {
			return new Array(n);
		};
		for (var i=0; i<data.length; i++) {
			if(data[i].id !== null || data[i].id !== 'undefined') {
				$scope.data.push(data[i].id);
			}
		}
	});
	
	$http.get("data/components.json").success (function(data){
		$scope.components = data;
		$.each(data, function(i, v) {
			if (v.type == component) {
				$scope.title = v.name;
				$scope.description = v.description;
			}
		});
	});
 }]);
 
 /** Display detail of product **/
 app.controller("DetailComponent", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
	var componentName = $routeParams.componentName;
	var componentId   = $routeParams.componentId;
	
	$http.get("data/"+componentName+".json").success (function(data){
		$scope.list = data;
		$scope.componentId = componentId;
	});
 }]);
 
 
//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int

		if(!isNaN(start)){
			return input.slice(start);
		}
    }
});
