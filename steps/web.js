const { Given, Then, When, AfterAll, setDefaultTimeout } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
// let chromedriver = require('chromedriver');
const assert = require('assert');
const sleep = require("sleep");
let driver = null;
// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const screen = { width: 1700, height: 900 };
setDefaultTimeout(80 * 1000);
Given('I am on the webportal login page', function () {
    driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless().windowSize(screen)).build();
    return driver.get('https://member.dev.clubswan.com/');
});
When('I fill in Email and Password with the following and then press Login', (dataTable) => {
    sleep.sleep(2);
    driver.findElement(By.name('emailAddress')).sendKeys(dataTable.raw()[1][1], Key.TAB);
    return driver.findElement(By.name('password')).sendKeys(dataTable.raw()[2][1], Key.RETURN);
});
Then('I should see dashboard page', async function (data) {
    sleep.sleep(5);
    const url = await driver.getCurrentUrl();
    assert(url === data.raw()[1][1]);
 });
AfterAll(async function() {
    if(driver){
        return await driver.quit();
    }
});
