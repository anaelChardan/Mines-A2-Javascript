(function () {
    'use strict';

    var controllersModule = angular.module('ContactApp.controllers', [])
    
    controllersModule.controller('ContactsCtrl', ContactsCtrl)

    ContactsCtrl.$inject = ['$scope', 'ContactsSrv'];

    function ContactsCtrl($scope, ContactsSrv) {
        $scope.contacts = ContactsSrv.getContacts();
        $scope.deleteContact = (id) => {
            $scope.$evalAsync(() => {ContactsSrv.deleteContact(id)});
        }

        console.log($scope.orderBy);
    }

    controllersModule.controller('EditContactsCtrl', EditContactsCtrl)

    EditContactsCtrl.$inject = ['$scope', '$routeParams', 'ContactsSrv', '$location'];

    function EditContactsCtrl($scope, $routeParams, ContactsSrv, $location) {
        if ($routeParams.contactId) {
            $scope.contact = ContactsSrv.getContact($routeParams.contactId)
        } else {
            $scope.creationMode = true;
        }

        $scope.createContact = (contact) => {
            ContactsSrv.saveContact(contact);
            $location.path('/contacts')
        }
    }
} ());
