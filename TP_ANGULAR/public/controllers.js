(function () {
    'use strict';

    var controllersModule = angular.module('ContactApp.controllers', [])

    controllersModule.controller('ContactsCtrl', ContactsCtrl)

    ContactsCtrl.$inject = ['$scope', 'ContactsSrv', '$rootScope'];

    function ContactsCtrl($scope, ContactsSrv, $rootScope) {
        $rootScope.loading = true;

        ContactsSrv.getContacts().then(contacts => {
            $scope.contacts = contacts;
            $rootScope.loading = false;
        });

        $scope.deleteContact = ContactsSrv.deleteContact
    }

    controllersModule.controller('EditContactsCtrl', EditContactsCtrl)

    EditContactsCtrl.$inject = ['$scope', '$routeParams', 'ContactsSrv', '$location'];

    function EditContactsCtrl($scope, $routeParams, ContactsSrv, $location) {
        if ($routeParams.contactId) {
            $rootScope.loading = true;
            ContactsSrv.getContact($routeParams.contactId)
                .then(
                result => {
                    $scope.contact = result;
                    $rootScope.loading = false;

                })
        } else {
            $scope.creationMode = true;
        }

        $scope.createContact = (contact) => {
            $rootScope.loading = true;
            ContactsSrv.saveContact(contact).then(() => { 
                $location.path('/contacts') 
                $rootScope.loading = false;
            });
        }
    }
} ());
