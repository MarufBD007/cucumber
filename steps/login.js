const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const { publicGet, publicPost} = require("../api");
let request = {};
let responseData = {};
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
    }).catch(error=>{
        responseData = error.response;
    });
});
Then('I should get status {int} and status {string} along with a valid token', function (input, input2) {
    assert(responseData.status === input);
    assert(responseData.data.status === input2);
    assert(responseData.data.token !== "");
});
Then('I should get status {int} and status fail', function (input) {
    assert(responseData.status === input);
    assert(responseData.data.status === "fail");
});
