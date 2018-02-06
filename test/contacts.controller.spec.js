(function() {
  'use strict';

  var assert = chai.assert;

  suite('contacts controller', function() {

    var ContactsController, $rootScope, mockContactDbService;

    setup(module('contactsApp'));

    setup(module(function($provide) {
      $provide.value('contactDbService', mockContactDbService);
    }));

    setup(inject(function($controller, $q, _$rootScope_) {
      $rootScope = _$rootScope_;





      ContactsController = $controller('ContactsController');

    }));

    test(' ', function() {
      
    });

  });

})();
