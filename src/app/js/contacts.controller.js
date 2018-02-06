(function() {
    'use strict';

  angular.module('contactsApp')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['contactDbService'];

  function ContactsController(contactDbService) {



  }

})();
