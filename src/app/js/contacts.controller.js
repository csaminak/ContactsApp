(function() {
    'use strict';

  angular.module('contactsApp')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['contactDbService'];

  function ContactsController(contactDbService) {
    var controller = this;

    this.sortReverse = false;
    this.filterDotComEmails = false;

    this.contact = {};
    this.contactList = null;

    this.saveContact = saveContact;
    this.deleteContact = deleteContact;
    this.getAllContacts = getAllContacts;
    this.toggleFilterDotComEmails = toggleFilterDotComEmails;

    // fetch contacts so the full list shows immediately
    getAllContacts();

    /**
     * Filter email address by ones that end with '.com'
     * @return {Array} all contacts with emailAddresses ending with .com
     */
    function toggleFilterDotComEmails() {
      controller.filterDotComEmails = !controller.filterDotComEmails;

      if (controller.filterDotComEmails) {
        controller.contactList = controller.contactList.filter(function (contact) {
          return /.*\.com$/.test(contact.emailAddress);
        });
      } else {
        controller.getAllContacts();
      }
    }

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
