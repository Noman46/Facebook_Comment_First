const SnykKubernetePage = require('../pageobjects/snyk-login-page');
const currentDate = new Date();


describe('Noman goes to the Kubernete lession page and read all the articles then take a screen shot', () => {


        it('Noman lands on the Snyk Kubernete lession page', async () => {

            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();
            const fileName = `${hours}${minutes}${seconds}kebernete`
        
            await SnykKubernetePage.openSnykLessonPage()
            await browser.pause(5000)
            await SnykKubernetePage.clcikOnKuberneteLesson(0)
            await browser.pause(3000)
            await SnykKubernetePage.clcikOnTopicList(0)
            await browser.pause(8000)
            await browser.saveScreenshot(`test/screenshot/${fileName}.png`);
            await browser.pause(3000)
            await browser.back()
            
            
        });



})


