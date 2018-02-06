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

    test('addContact adds contact to contact db when given first and last name', function() {
      assert.strictEqual(ContactDbService.getAllContacts().length, 0);

      ContactDbService.addContact(testContact);

      assert.strictEqual(ContactDbService.getAllContacts().length, 1);
      assert.deepEqual(testContact, ContactDbService.getAllContacts()[0]);
    });

    test('clearAllContacts will remove all contacts from database', function() {
      ContactDbService.clearAllContacts();

      assert.strictEqual(ContactDbService.getAllContacts().length, 0);
    });

    test('addContact will not add contact unless it has a first name', function() {
      testContact.firstName = undefined;
      ContactDbService.addContact(testContact);

      assert.strictEqual(ContactDbService.getAllContacts().length, 0);
    });

    test('addContact will not add contact unless it has a last name', function() {
      testContact.lastName = undefined;
      ContactDbService.addContact(testContact);

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
