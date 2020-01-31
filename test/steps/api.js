const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const { privateGet, publicPost} = require("../apiCaller");
let request = {};
let responseData = {};
let userDetails = {};

Given('user wants to login with following attributes', function(data){
    request.email = data.raw()[1][1];
    request.password = data.raw()[2][1];
});

When('I press Login', () => {
    return publicPost('https://api.dev.auws.cloud/auth/login',request).then(response => {
        responseData = response;
    }).catch(error=>{
        responseData = error.response;
    }); 
});

When('I call the api with Bearer token', function () {
    return privateGet('https://api.dev.auws.cloud/user', responseData.data.data.token).then(response => {
        userDetails = response;
    }).catch(error=>{
        userDetails = error.response;
    }); 
});

Then('I can see the details of the user with status success', function(){
    assert(userDetails.data.status === "success");
});

Then('I should get status {int} along with a valid token', function (input) {
    assert(responseData.status === input);
    assert(responseData.data.token !== "");
});
Then('I should get status {int} and status fail', function (input) {
    assert(responseData.status === input);
    assert(responseData.data.status === "fail");
});
