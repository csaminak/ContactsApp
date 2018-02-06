(function() {
  'use strict';

  var assert = chai.assert;

  suite('ContactDbService Tests', function() {
    var ContactDbService, $rootScope, testContact;

    setup(module('contactsApp'));

    setup(inject(function(contactDbService, _$rootScope_) {
      ContactDbService = contactDbService;
      $rootScope = _$rootScope_;

      ContactDbService.clearAllContacts();

      testContact = {
        firstName: 'Jane',
        lastName: 'Doe',
        emailAddress: 'jdoe@gmail.com',
        phoneNumber: '123-456-7890',
        companyName: 'ConsenSys'
      }
    }));

    teardown(function() {
      ContactDbService.clearAllContacts();
    });

    test('addContact adds contact to contact db when given first and last name', function() {
      assert.strictEqual(ContactDbService.contactDatabase.length, 0);

      ContactDbService.addContact(testContact);

      assert.strictEqual(ContactDbService.contactDatabase.length, 1);
      assert.deepEqual(testContact, ContactDbService.contactDatabase[0]);
    });

    test('clearAllContacts will remove all contacts from database', function() {
      ContactDbService.clearAllContacts();

      assert.strictEqual(ContactDbService.contactDatabase.length, 0);
    });

    test('addContact will not add contact unless it has a first name', function() {
      testContact.firstName = undefined;
      ContactDbService.addContact(testContact);

      assert.strictEqual(ContactDbService.contactDatabase.length, 0);

    });

  });


}());
