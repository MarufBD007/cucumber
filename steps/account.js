const { Then, When } = require('cucumber');
const { baseUrl } = require("../config");
const assert = require('assert');
const { privateGet} = require("./apiCaller");
let responseData = {};

When('I call the api with Bearer token for fetching account list', function(){
    return  privateGet(`${baseUrl}/accounts/list`, this.token).then(response => {
        responseData = response;
    }).catch(error => {
        responseData = error.response;
    }); 
});

Then('I should see the list of accounts', function(){
    assert(responseData.data.status === "success");
    assert(responseData.data.data.length > 0);
});