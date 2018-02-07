(function() {
    'use strict';

  angular.module('contactsApp')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['contactDbService'];

  function ContactsController(contactDbService) {
    var controller = this;

    this.contact = {};
    this.saveContact = saveContact;


    function saveContact(contact) {
      contactDbService.addContact(contact);
    }


  }

})();
