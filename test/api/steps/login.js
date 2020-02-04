const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const { publicPost} = require("../../apiCaller");
const { baseUrl } = require("../../../config");
let request = {};
let responseData = {};

Given('I want to login with the following attributes', function(data){
    request.email = data.raw()[1][1];
    request.password = data.raw()[2][1];
});

When('I press Login button', () => {
    return publicPost(`${baseUrl}/auth/login`,request).then(response => {
        responseData = response;
    }).catch(error => {
        responseData = error.response;
    }); 
});

Then('I should get status {int} along with a valid token', function (input) {
    assert(responseData.status === input);
    assert(responseData.data.token !== "");
});