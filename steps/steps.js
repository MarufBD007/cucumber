const { Given, Then, When, AfterAll, setDefaultTimeout } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const { publicGet, publicPost} = require("../api");
const sleep = require("sleep");
let request = {};
let responseData = {};
let driver = null;
setDefaultTimeout(60 * 1000);
Given('I am on the login page', async function () { 
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().setSize(1700, 900);
    return await driver.get('https://member.dev.clubswan.com/');
});
When('I fill in Email with {string}', async function (input) {
    request.email = input;
    if(driver) return await driver.findElement(By.name('emailAddress')).sendKeys(input, Key.TAB);
});
When('I fill in Password with {string}', async function (input) {
    request.password = input;
    if(driver)  return await driver.findElement(By.name('password')).sendKeys(input, Key.TAB);
});
When('I press Login', async() => {
    if(driver)  
        return await driver.findElement(By.name('password')).sendKeys('', Key.RETURN);
    else 
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

Then('I should see {string}',  async function (input) {
    sleep.sleep(5);
    const url = await driver.getCurrentUrl();
    assert(input === url.toString())
 });
AfterAll( function() {
    return driver.quit();
});
