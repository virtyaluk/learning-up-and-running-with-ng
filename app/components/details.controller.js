(function() {
    'use strict';

    function DetailsController($http, $routeParams) {
        var vm = this;
        
        $http.get('./app/data.json').success(function(data) {
            vm.authors = data;
            vm.whichItem = $routeParams.itemId;

            if ($routeParams.itemId > 0) {
            vm.prevItem = +$routeParams.itemId - 1;
        } else {
            vm.prevItem = vm.authors.length - 1;
        }

        if ($routeParams.itemId < vm.authors.length - 1) {
            vm.nextItem = +$routeParams.itemId + 1;
        } else {
            vm.nextItem = 0;
        }
        });
    }

    DetailsController.$inject = ['$http', '$routeParams'];

    angular
        .module('app')
        .controller('DetailsController', DetailsController);
}());