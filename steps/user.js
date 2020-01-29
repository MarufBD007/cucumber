const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const axios = require("axios");

(() => {
    let users = [];
    Given('I fetch all user', function () { });
    When('I make an api call using callbacks', function (callback) {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            users = response.data;
            callback()
        }).catch(error => {
            console.log(error);
            callback(error)
        });
    });

    Then('I end up with users {int}', function (input) {
        assert.equal(users.length, input);
    });

})();