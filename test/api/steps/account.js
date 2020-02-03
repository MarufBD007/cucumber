const { Then, When } = require('cucumber');
const assert = require('assert');
const { privateGet} = require("../../apiCaller");
let responseData = {};

When('I call the api with Bearer token for fetching account list', function(){
    return  privateGet('https://api.dev.auws.cloud/accounts/list', this.token).then(response => {
        responseData = response;
    }).catch(error => {
        responseData = error.response;
    }); 
});

Then('I can see the list of accounts', function(){
    console.log(responseData.data.data);
    assert(responseData.data.status === "success");
    assert(responseData.data.data.length > 0);
});