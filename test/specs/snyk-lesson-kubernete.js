const SnykKubernetePage = require('../pageobjects/snyk-login-page');
const Utility = require('../Utility/utility');
const assert = require('assert');


describe('Noman Reads all the lesson, takes screen shot and send it to manager via email', () => {

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
        it('Noman Validates Number Of topic list and number of completed topic list is equal', async () => {
            const totalNumberOfTopic = await SnykKubernetePage.getNumberofTopicInLesson()
            const totalNumberOfCompletedTopic = await SnykKubernetePage.getNumberofCompltedTopicInLesson()
            assert.strictEqual(totalNumberOfTopic, totalNumberOfCompletedTopic, `Total topic number is ${totalNumberOfTopic} and Total completed Topic Number is ${totalNumberOfCompletedTopic}`);
        });
        it('Noman takes a screen shot as a proof that he complits the first lesson', async () => {
            const fileName = `${Utility.getCurrentTime()}-kebernete`
            await browser.saveScreenshot(`test/screenshot/${fileName}.png`);
        });
})


