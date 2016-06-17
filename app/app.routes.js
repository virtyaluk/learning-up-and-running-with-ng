(function() {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'app/components/list.html',
                controller: 'ListController',
                controllerAs: 'lc'
            })
            .when('/details/:itemId', {
                templateUrl: 'app/components/details.html',
                controller: 'DetailsController',
                controllerAs: 'dc'
            })
            .otherwise({
                redirectTo: '/list'
            });
    };

    config.$inject = ['$routeProvider'];

    angular
        .module('app')
        .config(config);
}());
