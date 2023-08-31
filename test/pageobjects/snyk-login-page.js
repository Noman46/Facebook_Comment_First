const Page = require('./page');

class SnykKubernetePage extends Page {
  

    get learningLessonCard () {
        return $$('//div[@class="card"]');
    }
    get topicListOfTheLesson () {
        return $$('//nav[@aria-label]/div');
    }
    get topicListAfterCompliting () {
        return $$('//div[contains(@aria-label,"marked as completed")]');
    }
    // get headerV () {
    //     return $('//h2[contains(text(),"How to improving Kubernetes capabilities configuration?")]');
    // }
    get topicSection () {
        return $$('//div[@class="vue--layout-step__meta"]')
    }

    async clcikOnKuberneteLesson (lessonNumber) {
       await this.learningLessonCard[lessonNumber].click()
    }
    async clcikOnTopicList (topicNumber) {
        await this.topicListOfTheLesson[topicNumber].click()
    }

    async readAllTopicOneByOne () {
        const totalNumberOfTopic = await this.topicListOfTheLesson.length
        const scrollTo = await this.topicSection[await this.topicSection.length-1]
        for (var topicList = 0; topicList<=totalNumberOfTopic-1; topicList++){
            await this.clcikOnTopicList(topicList)
            if(topicList === totalNumberOfTopic-1){
                // await browser.scroll(0, 300)
                await scrollTo.scrollIntoView({ block: 'center', inline: 'center' });
                await browser.pause(8000);
            }else{
                await browser.pause(8000);
            }      
        }
    }
    async getNumberofTopicInLesson () {
        console.log("Number of  Topic ================== ",await this.topicListOfTheLesson.length)
        return await this.topicListOfTheLesson.length
    }
    async getNumberofCompltedTopicInLesson () {
        console.log("Number of Completed Topic ================== ",await this.topicListAfterCompliting.length)
        return await this.topicListAfterCompliting.length
    }
    

    openSnykLessonPage () {
        return super.open('https://learn.snyk.io/lessons/?categories=kubernetes');
    }
}

module.exports = new SnykKubernetePage();
