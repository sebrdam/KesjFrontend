function componentsController($scope,$http) {
    $http.get("/data/components.json")
        .success(function(response) {$scope.names = response;});
}