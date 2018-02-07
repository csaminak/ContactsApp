(function() {
    'use strict';

  angular.module('contactsApp')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['contactDbService'];

  function ContactsController(contactDbService) {
    var controller = this;

    this.sortReverse = false;

    this.contact = {};
    this.contactList = null;

    this.saveContact = saveContact;
    this.deleteContact = deleteContact;
    this.getAllContacts = getAllContacts;

    // fetch contacts so the full list shows immediately
    getAllContacts();

    /**
     * takes contact from form and sends it to contactDbService
     * @param  {Object} contact contact that will be added
     */
    function saveContact(contact) {
      contactDbService.addContact(contact);
      controller.contact = {};
    }

    /**
     * deletes contact from contactDbService
     * @param  {String} contactEmailAddress email address of contact
     */
    function deleteContact(contactEmailAddress) {
      contactDbService.removeContact(contactEmailAddress);
    }

    /**
     * gets all contacts from contactDbService and stores that value into the contactList
     */
    function getAllContacts() {
       controller.contactList = contactDbService.getAllContacts();
    }

  }

})();
