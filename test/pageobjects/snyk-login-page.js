const Page = require('./page');

class SnykKubernetePage extends Page {
  

    get learningLessonCard () {
        return $$('//div[@class="card"]');
    }
    get topicListOfTheLesson () {
        return $$('//nav[@aria-label]/div');
    }

    async clcikOnKuberneteLesson (lessonNumber) {
       await this.learningLessonCard[lessonNumber].click()
    }
    async clcikOnTopicList (topicNumber) {
        await this.topicListOfTheLesson[topicNumber].click()
    }

    async readAllTopicOneByOne () {
        const totalNumberOfTopic = await this.topicListOfTheLesson.length
        for (var topicList = 0; topicList<=totalNumberOfTopic-1; topicList++){
            await this.clcikOnTopicList(topicList)
            if(topicList === totalNumberOfTopic){
                await browser.scroll(0, 300)
                await browser.pause(8000);
            }else{
                await browser.pause(8000);
            }
            
        }
    }

    openSnykLessonPage () {
        return super.open('https://learn.snyk.io/lessons/?categories=kubernetes');
    }
}

module.exports = new SnykKubernetePage();
