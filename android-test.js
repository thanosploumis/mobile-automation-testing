const assert = require('assert');
const { describe, before, after, it } = require('mocha');
const { Builder, By, until } = require('selenium-webdriver');
const { android } = require('appium');

describe('Android App Test', function () {
  let driver;

  before(async function () {
    // Set up Appium driver with desired capabilities
    const capabilities = {
      platformName: 'Android',
      deviceName: 'your_device_name_here',
      appPackage: 'com.example.android.apis',
      appActivity: '.ApiDemos',
    };
    driver = await new Builder().usingServer('http://localhost:4723/wd/hub').withCapabilities(capabilities).build();
  });

  after(async function () {
    // Quit Appium driver after all tests are completed
    await driver.quit();
  });

  it('should display "Api Demos" title on app launch', async function () {
    // Wait for the app to launch and find the title element by ID
    const titleElement = await driver.wait(until.elementLocated(By.id('android:id/title')), 10000);

    // Get the text of the title element and assert that it equals "Api Demos"
    const titleText = await titleElement.getText();
    assert.strictEqual(titleText, 'Api Demos');
  });
});