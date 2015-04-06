'use strict';

describe('<%= moduleNameCamelCase %>', function() {

  beforeEach(module('<%= moduleNameCamelCase %>'));

  var scope,
    rootScope,
    controller;

  describe('TestController', function() {

    beforeEach(function() {
      inject(function($injector, _$rootScope_, _$controller_) {
        rootScope = _$rootScope_;
        controller = _$controller_;
        scope = _$rootScope_.$new();

        controller('TestController', {
          $scope: scope,
          $rootScope: rootScope
        });
      });
    });

    it('initial values should be set', function() {
      expect(scope.message).toBe('Hello world!');
    });
  });
});
