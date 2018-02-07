(function() {
    'use strict';

    angular.module('contactsApp')
        .factory('contactDbService', ContactDbService);

    function ContactDbService() {
      return {
          addContact: addContact,
          clearAllContacts: clearAllContacts,
          getAllContacts: getAllContacts,
          removeContact:removeContact
      };
      }

    var contactDatabase = [];

    /**
     * add contact to contactDatabase
     * @param {Object} contact must contain firstName and lastName in order to be add
     */
    function addContact(contact) {
      if(!contact.firstName || !contact.lastName) {
        return null;
      }
      contactDatabase.push(contact);
      return contact;
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

    /**
     * Will remove a contact by looping through the contacts and using a unique
     * identifier (emailAddress) to find the index of the contact to remove.
     * @param  {String} contactEmailAddress Email of contact, should be unique to each contact
     */
    function removeContact(contactEmailAddress) {
      contactDatabase.forEach(function (contact, index) {
        if (contact.emailAddress === contactEmailAddress) {
           contactDatabase.splice(index, 1);
        }
      });
    }

})();
