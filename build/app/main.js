(function() {
    'use strict';

    angular.module('contactsApp', []);

})();

(function() {
    'use strict';

    angular.module('contactsApp')
        .factory('contactDbService', ContactDbService);

    function ContactDbService() {
      return {
          addContact: addContact,
          clearAllContacts: clearAllContacts,
          getAllContacts: getAllContacts
      };
      }

    var contactDatabase = [];

    /**
     * add contact to contactDatabase
     * @param {Object} contact must contain firstName and lastName in order to be add
     */
    function addContact(contact) {
      if(!contact.firstName || !contact.lastName) {
        return;
      }
      contactDatabase.push(contact);
    }

    /**
     * remove all contacts from database by setting it to an empty array
     */
    function clearAllContacts() {
      contactDatabase.length = 0;
    }

    /**
     * Returns the list of contacts
     * @return {Array} List of contacts
     */
    function getAllContacts() {
      return contactDatabase;
    }

})();

//# sourceMappingURL=main.js.map