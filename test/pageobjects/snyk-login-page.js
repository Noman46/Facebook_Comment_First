const Page = require('./page');

class SnykKubernetePage extends Page {
  

    get learningTopicCard () {
        return $$('//div[@class="card"]');
    }
    get topicList () {
        return $$('//a[starts-with(@href,"/lesson/container-does-not-drop-all-default-capabilities/")]');
    }

    async numberOfElements (username, password) {
        
        console.log("Eleemnts Lenngth ============ ",await this.learningTopicCard.length)
        

    }
    async numberOfElements2 (username, password) {
        
        console.log("Eleemnts Lenngth topic ============ ",await this.topicList.length)
    }

    async clcikOnKuberneteLesson (lessonNumber) {
       this.learningTopicCard[lessonNumber].click()
    }
    async clcikOnTopicList (topicNumber) {
        this.topicList[topicNumber].click()
     }
     
    

    openSnykLessonPage () {
        return super.open('https://learn.snyk.io/lessons/?categories=kubernetes');
    }
}

module.exports = new SnykKubernetePage();
