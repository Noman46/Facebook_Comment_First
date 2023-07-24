

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get filterLanguage() {
        return $('//div[@role="button" and @class="dropdown__handle"]')
    }

    get selectLanguage() {
        return $('//input[@value="php"]')
    }

    // get learningContent() {
    //     const elements = $$('//div[@class="card"]')
    //     return elements.values.length
    // }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async clickOnFilter() {
        await this.filterLanguage.click();
    }

    async clickDesireLanguage() {
        
        await this.selectLanguage.click()
    }

    async totalNumberOfLearningContent(cardNumber) {
        let elements = await $(`(//img[@class="card__image"])[${cardNumber}]`)
        await elements.scrollIntoView()
        await elements.click()
    }

    async scrollThroughTheSection(sectionNumber) {
        let sections = await $(`(//div[@class="vue--layout-step"]/div[@class="vue--layout-step__body"])[${sectionNumber}]`)
        await sections.scrollIntoView()
    }

    async countTotalTickSign() {
        let tickSigns = await $$('//div[@class="tableOfContents__checkbox tableOfContents__checkbox--read tableOfContents__checkbox--changed"]').length
        console.log(`The number =========== ${tickSigns}`)
    }
    async clickOnLoginButton(){
        browser.pause(5000)
        let loginButton = await $('//*[@id="login_form"]/div[2]/div[3]')
        browser.pause(3000)
        await loginButton.click()
    }

    async loginToFaceBook(){
        let userName = await $('//input[@aria-label="Email address or phone number"]')
        let password = await $('//input[@aria-label="Password"]')
        let loginButton = await $('//button[@name="login"]')

        await userName.setValue("nomanibrahim420@gmail.com")
        await password.setValue("nomanfacebook46new")
        await loginButton.click()
    }

    async putTheComment () {
        let commentBox = await $('//div[@aria-label="Write a comment"]')
        await commentBox.setValue("CEFALO")
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }

    openFacebook () {
        return super.openFacebook();
    }

    openRecharge () {
        return super.openRandomUrl();
    }



}

module.exports = new LoginPage();
