const { Given, Then, When, AfterAll, setDefaultTimeout } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const { publicGet, publicPost} = require("../api");
const sleep = require("sleep");
let request = {};
let responseData = {};
let driver = null;

When('I fill in Email with {string}', async function (input) {
    request.email = input;
});
When('I fill in Password with {string}', async function (input) {
    request.password = input;
});
When('I press Login', async() => {
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