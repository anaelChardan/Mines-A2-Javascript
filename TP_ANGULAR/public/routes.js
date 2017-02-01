
(function () {
    'use strict';
    angular
        .module('ContactApp.routes', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/home.html'
                })
                .when('/contacts', {
                    templateUrl: 'partials/contacts.html',
                    controller: 'ContactsCtrl'
                })
                .when('/contacts/edit/:contactId', {
                    templateUrl: 'partials/edit-contacts.html',
                    controller: 'EditContactsCtrl'
                })
                .when('/contacts/new', {
                    templateUrl: 'partials/edit-contacts.html',
                    controller: 'EditContactsCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

        }]);
} ());
