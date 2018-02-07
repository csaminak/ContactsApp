(function() {
    'use strict';

  angular.module('contactsApp')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['contactDbService'];

  function ContactsController(contactDbService) {
    var controller = this;

    this.contact = {};
    this.saveContact = saveContact;
    this.deleteContact = deleteContact;


    function saveContact(contact) {
      contactDbService.addContact(contact);
    }

    function deleteContact(contactEmailAddress) {
      contactDbService.removeContact(contactEmailAddress);
    }

  }

})();
