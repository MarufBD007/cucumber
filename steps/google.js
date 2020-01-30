const { Given, Then, When, AfterAll } = require('cucumber');
const assert = require('assert');
const { publicGet, publicPost} = require("../api");
const { Builder, By, Key, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
Given('I visit google', async function () { 
    return await driver.get('http://www.google.com');
});
Then('I should see Google in title', async function () { 
    return await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
});
AfterAll( function() {
    return driver.quit();
});
