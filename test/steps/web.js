const { Given, Then, When, AfterAll, setDefaultTimeout } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const sleep = require("sleep");
let driver = null;
setDefaultTimeout(60 * 1000);
Given('I am on the webportal login page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().setSize(1700, 900);
    return await driver.get('https://member.dev.clubswan.com/');
});
When('I fill in Email and Password with {string} and {string}', async(input, input2) => {
    await driver.findElement(By.name('emailAddress')).sendKeys(input, Key.TAB);
    return await driver.findElement(By.name('password')).sendKeys(input2, Key.RETURN);
});

Then('I should see {string}',  async function (input) {
    sleep.sleep(5);
    const url = await driver.getCurrentUrl();
    assert(input === url.toString())
 });
AfterAll( function() {
    return driver.quit();
});
