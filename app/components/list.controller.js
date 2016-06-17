(function() {
    'use strict';

    function ListController($http) {
        var vm = this;

        $http.get('./app/data.json').success(function(data) {
            vm.authors = data;
            vm.artistOrder = 'name';
        });
    }

    ListController.$inject = ['$http'];

    angular
        .module('app')
        .controller('ListController', ListController);
}());
