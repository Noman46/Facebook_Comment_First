const SnykKubernetePage = require('../pageobjects/snyk-login-page');
const currentDate = new Date();


describe('Noman goes to the Kubernete lession page and read all the articles then take a screen shot', () => {


        it('Noman lands on the Snyk Kubernete lession page', async () => {
            await SnykKubernetePage.openSnykLessonPage()
            await browser.pause(5000)

        });
        it('Noman Select the first lesson from the list', async () => {
            await SnykKubernetePage.clcikOnKuberneteLesson(0)
            await browser.pause(3000)
        });
        it('Noman scroll down every topic of the first lesson', async () => {
            await SnykKubernetePage.readAllTopicOneByOne()
        });
        it('Noman takes a screen shot as a proof that he complits the first lesson', async () => {
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();
            const fileName = `${hours}${minutes}${seconds}-kebernete`
            await browser.saveScreenshot(`test/screenshot/${fileName}.png`);
            await browser.pause(3000)
            await browser.back()
        });
})


