const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const { publicGet, publicPost} = require("../api");

(async() => {
    request = {};
    responseData = {};
    Given('I am on the login page', function () { });
    When('I fill in Email with {string}', function (input) {
        request.email = input;
    });
    When('I fill in Password with {string}', function (input) {
        request.password = input;
    });
    When('I press Login', () => {
        return publicPost('https://api.dev.auws.cloud/auth/login',request).then(response => {
            responseData = response;
        });
    });
    Then('I should get status {int} and success status along with a valid token', function (input) {
        assert(responseData.status === input);
        assert(responseData.data.status === "success");
        assert(responseData.data.token !== "");
    });
})();