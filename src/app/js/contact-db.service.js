(function() {
    'use strict';

    angular.module('contactsApp')
        .factory('contactDbService', ContactDbService);

    function ContactDbService() {
      return {
          addContact: addContact,
          contactDatabase: contactDatabase,
          clearAllContacts: clearAllContacts
      };
      }

    var contactDatabase = [];

    /**
     * add contact to contactDatabase
     * @param {Object} contact must contain firstName and lastName in order to be add
     */
    function addContact(contact) {
      contactDatabase.push(contact);
    }

    /**
     * remove all contacts from database by setting it to an empty array
     */
    function clearAllContacts() {
      contactDatabase = [];
    }

})();
