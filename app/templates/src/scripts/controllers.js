(function(window, angular, undefined) {
  'use strict';

  angular
    .module('<%= moduleNameCamelCase %>.controllers', [])
    .controller('TestController', ['$scope',
      function($scope) {
        $scope.message = 'Hello world!';
      }
    ]);

})(window, window.angular);
