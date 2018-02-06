(function() {
  'use strict';

  var assert = chai.assert;

  suite('ContactDbService Tests', function() {
    var ContactDbService, $rootScope;

    setup(module('contactsApp'));

    setup(inject(function(ContactDbService, _$rootScope_) {
      ContactDbService = contactDbService;
      $rootScope = _$rootScope_;

    }));

    test('', function() {


    });


  });


}());
