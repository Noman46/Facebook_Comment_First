const Page = require('./page');

class SnykLoginPage extends Page {
  

    get inputUsername () {
        return $('#username');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    openSnykLessonPage () {
        return super.open('https://learn.snyk.io/lessons/');
    }
}

module.exports = new SnykLoginPage();
