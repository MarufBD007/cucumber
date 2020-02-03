const { setWorldConstructor, BeforeAll, Before } = require('cucumber');
const { publicPost} = require("../../apiCaller");
const getGlobalClass = require("./support/global");
const userCredentails = {
    email: "marufr@springrainit.com",
    password: "asdzxc"
};
BeforeAll(function() {
    return publicPost('https://api.dev.auws.cloud/auth/login', userCredentails).then(response => {
        setWorldConstructor(getGlobalClass(response.data.data.token));
    }).catch(error=>error);
});