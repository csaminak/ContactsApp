(function() {
  'use strict';

  var assert = chai.assert;

  suite('ContactDbService Tests', function() {
    var ContactDbService, $rootScope, testContact;

    setup(module('contactsApp'));

    setup(inject(function(contactDbService, _$rootScope_) {
      ContactDbService = contactDbService;
      $rootScope = _$rootScope_;

      testContact = {
        firstName: 'Jane',
        lastName: 'Doe',
        emailAddress: 'jdoe@gmail.com',
        phoneNumber: '123-456-7890',
        companyName: 'ConsenSys'
      }
    }));

    test('addContact adds contact to contact db when given first and last name', function() {

      ContactDbService.addContact(testContact);

      assert.strictEqual(ContactDbService.contactDatabase.length, 1);

    });


  });


}());
