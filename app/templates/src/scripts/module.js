(function(window, angular, undefined) {
  'use strict';

  angular
    .module('<%= moduleNameCamelCase %>', [
      '<%= moduleNameCamelCase %>.controllers',
      '<%= moduleNameCamelCase %>.directives'
    ]);

})(window, window.angular);
