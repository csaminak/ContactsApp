(function() {
    'use strict';

    angular.module('contactsApp')
        .factory('contactDbService', ContactDbService);

    function ContactDbService() {
          return {
              addContact: addContact,
              contactDatabase: contactDatabase
          };
      }

    var contactDatabase = [];

    function addContact(contact) {
      contactDatabase.push(contact);
    }

})();
