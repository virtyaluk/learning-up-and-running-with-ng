(function() {
    'use strict';

    function FirstCtrl($http) {
        var vm = this;

        $http.get('./app/data.json').success(function(data) {
            vm.authors = data;
            vm.artistOrder = 'name';
        });
    }

    FirstCtrl.$inject = ['$http'];

    angular
        .module('app')
        .controller('FirstCtrl', FirstCtrl);
}());
