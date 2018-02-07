(function() {
  'use strict';

  var assert = chai.assert;

  suite('ContactDbService Tests', function() {
    var ContactDbService, $rootScope, testContact, secondContact;

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
      };

      secondContact = {
        firstName: 'John',
        lastName: 'Smith',
        emailAddress: 'jsmith@gmail.com',
        phoneNumber: '456-980-1234',
        companyName: 'ConsenSys'
      };
    }));

    teardown(function() {
      ContactDbService.clearAllContacts();
    });

    test('addContact will not add contact unless it has an emailAddress', function() {
      testContact.emailAddress = undefined;
      var actualContact = ContactDbService.addContact(testContact);

      assert.strictEqual(actualContact, null);
      assert.strictEqual(ContactDbService.getAllContacts().length, 0);
    });

    test('addContact adds contact to contact db when given emailAddress', function() {
      assert.strictEqual(ContactDbService.getAllContacts().length, 0);

      var actualContact = ContactDbService.addContact(testContact);

      assert.deepEqual(actualContact, testContact);
      assert.strictEqual(ContactDbService.getAllContacts().length, 1);
      assert.deepEqual(testContact, ContactDbService.getAllContacts()[0]);
    });

    test('clearAllContacts will remove all contacts from database', function() {
      ContactDbService.clearAllContacts();

      assert.strictEqual(ContactDbService.getAllContacts().length, 0);
    });

    test('getAllContacts will return all contacts', function() {
      ContactDbService.addContact(testContact);
      ContactDbService.addContact(secondContact);

      assert.strictEqual(ContactDbService.getAllContacts().length, 2);

      assert.deepEqual(ContactDbService.getAllContacts(), [testContact, secondContact]);
    });

    test('removeContact will remove specified contact', function() {
      ContactDbService.addContact(testContact);
      ContactDbService.addContact(secondContact);

      ContactDbService.removeContact(testContact.emailAddress);

      assert.strictEqual(ContactDbService.getAllContacts().length, 1);
      assert.deepEqual(ContactDbService.getAllContacts(), [secondContact]);
    });

  });

}());
