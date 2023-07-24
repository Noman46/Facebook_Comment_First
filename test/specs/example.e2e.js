const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const CDP = require('chrome-remote-interface');

describe('My Login application', () => {
    // it('should login with valid credentials', async () => {
    //     await LoginPage.open();
    //     await browser.pause(2000)
    //     await LoginPage.clickOnFilter();
    //     await browser.pause(2000)
    //     await LoginPage.clickDesireLanguage()
    //     await browser.pause(3000)
    //     await LoginPage.clickOnFilter();
    //     await browser.pause(5000)
    //     await LoginPage.totalNumberOfLearningContent(1)
    //     await browser.pause(3000)
    //     await LoginPage.scrollThroughTheSection(1)
    //     await browser.pause(7000)
    //     await LoginPage.scrollThroughTheSection(2)
    //     await browser.pause(7000)
    //     await LoginPage.scrollThroughTheSection(3)
    //     await browser.pause(7000)
    //     await LoginPage.scrollThroughTheSection(4)
    //     await browser.pause(7000)
    //     await LoginPage.scrollThroughTheSection(1)
    //     await browser.pause(2000)
    //     await LoginPage.countTotalTickSign()
    //     await browser.pause(3000)
    //     await browser.saveScreenshot('test/screenshot/com.png');
    //     //await browser.back()
        

        
    // });

    // it('should login facebook', async () => {
    //     it('should login facebook', async () => {
        
    //         await LoginPage.openFacebook();
    //         browser.setWindowSize(1920, 1080)
    //         await LoginPage.clickOnLoginButton()
    //         await browser.saveScreenshot('test/screenshot/com.png');
    //         await LoginPage.loginToFaceBook()
    //         await browser.pause(15000)
    //         await LoginPage.putTheComment()
    //         await browser.pause(14000)
    //         await browser.saveScreenshot('test/screenshot/com1.png');
    //     });
    // })



    // For Network Login

    // it('can use Puppeteer as automation fallback', async () => {
    //     // WebDriver command
    //     await browser.url('https://webdriver.io')

    //     // get <Puppeteer.Browser> instance (https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-class-browser)
    //     const puppeteer = await browser.getPuppeteer()

    //     // use Puppeteer interfaces
    //     const page = (await puppeteer.pages())[0]
    //     await page.setRequestInterception(true)
    //     page.on('request', interceptedRequest => {
    //         // if (interceptedRequest.url().endsWith('webdriverio.png')) {
    //         //     return interceptedRequest.continue({
    //         //         url: 'https://webdriver.io/img/puppeteer.png'
    //         //     })
    //         // }
    //         console.log("The First URL is ================ " + interceptedRequest.url()[0])
    //         interceptedRequest.continue()
    //     })
    //     await browser.url('https://webdriver.io')
    //     //await browser.pause(10000)
    // });

    // For Console output
    it('can use Puppeteer as automation fallback', async () => {
        await browser.url('https://test.rechargenews.com/');
        await browser.pause(10000)

        // Run a JavaScript command in the browser console
        const commandResult = await browser.execute(() => {
          // Place your JavaScript code here to be executed in the browser context
          // For example, let's retrieve the current page title:
          //return window.nhstDataLayer.events;
          // return _satellite.buildInfo.buildDate;
          return s.eVar1;
        });
      
        // Output the result of the JavaScript command
        console.log('Command Result ========================= :', commandResult);
    });
})


