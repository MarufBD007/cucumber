const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const { privateGet, publicPost} = require("../apiCaller");
let request = {};
let responseData = {};
let userDetails = {};
let token = "";

When('I fill in Email with {string}', async function (input) {
    request.email = input;
});
When('I fill in Password with {string}', async function (input) {
    request.password = input;
});
When('I press Login', async() => {
    return publicPost('https://api.dev.auws.cloud/auth/login',request).then(response => {
        responseData = response;
        if(responseData.data.data.token) token = responseData.data.data.token;
    }).catch(error=>{
        responseData = error.response;
    }); 
});



When('I call the api with Bearer token', async function () {
    return privateGet('https://api.dev.auws.cloud/user', token).then(response => {
        userDetails = response;
    }).catch(error=>{
        userDetails = error.response;
    }); 
});

Then('I can see the details of the user with status success', function(){
    // console.log(userDetails.data)
    assert(userDetails.data.status === "success");
})



Then('I should get status {int} and status {string} along with a valid token', function (input, input2) {
    assert(responseData.status === input);
    assert(responseData.data.status === input2);
    assert(responseData.data.token !== "");
});
Then('I should get status {int} and status fail', function (input) {
    assert(responseData.status === input);
    assert(responseData.data.status === "fail");
});