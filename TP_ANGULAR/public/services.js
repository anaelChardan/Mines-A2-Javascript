(function () {
    'use strict';

    var serviceModule = angular.module('ContactApp.services', [])

    serviceModule.service('ContactsSrv', ContactsSrv)

    ContactsSrv.$inject = ['$http', '$log', '$q', '$timeout'];

    function ContactsSrv($http, $log, $q, $timeout) {

        var contacts = null;

        var loadContacts = () => {
            if (!contacts) {
                return $timeout(() => {
                    return $http
                        .get('/data/contacts.json')
                        .then(
                        (response) => {
                            contacts = response.data;
                            return contacts;
                        },
                        (error) => {
                            $log.error(error);
                        });
                }, 2000)
            } else {
                return $q.resolve(contacts);
            }
        }

        this.getContacts = () => {
            return loadContacts();
        }

        this.getContact = (id) => {
            return loadContacts().then((response) => response.find(c => c._id === id));
        }

        this.saveContact = (contact) => {
            return loadContacts().then(
                (response) => {
                    contact._id = String(response.length);
                    response.push(contact)
                }
            );
        }

        this.deleteContact = (id) => {
            return loadContacts().then((result) => result.splice(result.findIndex(c => c._id == id), 1));
        }

    }
} ());
