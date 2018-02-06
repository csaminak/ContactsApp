(function() {
    'use strict';

    angular.module('contactsApp')
        .factory('contactDbService', ContactDbService);

        function ContactDbService() {
              return {
                  addContact: addContact,
              };
          }

        var contactDatabase = [];

        function addContact(contact) {
          contactDatabase.push(contact);
        }

})();
