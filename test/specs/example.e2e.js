const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

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

    it('should login facebook', async () => {
        await LoginPage.openFacebook();
        await LoginPage.clickOnLoginButton()
        await LoginPage.loginToFaceBook()
        await browser.pause(15000)
        await LoginPage.putTheComment()
        await browser.pause(14000)
    });
});


