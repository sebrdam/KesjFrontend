app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/components', {
				templateUrl: 'partials/components.html',
				controller: 'DisplayComponent'
			}).
			when('/components/list/:componentName', {
				templateUrl: 'partials/components/list.html',
				controller: 'ListComponents',
				title: 'test'
			}).
			when('/components/detail/:componentName/:componentId', {
				templateUrl: 'partials/components/detail.html',
				controller: 'DetailComponent'
			}).
			otherwise({
				redirectTo: '/components'
			});
	}
]);