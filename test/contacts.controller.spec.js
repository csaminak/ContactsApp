(function() {
  'use strict';

  var assert = chai.assert;

  suite('contacts controller', function() {

    var ContactsController, $rootScope, testContact, secondContact;
    var mockContactDbService = {
      addContact: sinon.spy(),
      removeContact: sinon.spy(),
      getAllContacts: sinon.spy(function() {
        return [testContact, secondContact]
      })
    };

    setup(module('contactsApp'));

    setup(module(function($provide) {
      $provide.value('contactDbService', mockContactDbService);
    }));

    setup(inject(function($controller, $q, _$rootScope_) {
      $rootScope = _$rootScope_;

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

      ContactsController = $controller('ContactsController');

    }));

    test('saveContact will enter the contact into the form', function() {
      ContactsController.saveContact(testContact);
      assert.strictEqual(mockContactDbService.addContact.calledOnce, true);
      assert.deepEqual(mockContactDbService.addContact.getCall(0).args[0], testContact);
    });

    test('removeContact will delete the specified contact from database', function() {
      ContactsController.deleteContact(testContact.emailAddress);
      assert.strictEqual(mockContactDbService.removeContact.calledOnce, true);
      assert.strictEqual(mockContactDbService.removeContact.getCall(0).args[0], testContact.emailAddress);
    });

    test('getAllContacts will retrieve all contacts from database', function() {
      var expectedContacts = [testContact, secondContact];
      ContactsController.getAllContacts();
      assert.deepEqual(ContactsController.contactList, expectedContacts);
    });

  });

})();
