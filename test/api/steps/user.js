const { Then, When } = require('cucumber');
const { baseUrl } = require("../../../config");
const assert = require('assert');
const { privateGet } = require("../../apiCaller");
let userDetails = {};


When('I call the api with Bearer token', function () {
    return privateGet(`${baseUrl}/user`, this.token).then(response => {
        userDetails = response;
    }).catch(error=>{
        userDetails = error.response;
    }); 
});

Then('I can see the details of the user with status success', function(){
    assert(userDetails.data.status === "success");
});
