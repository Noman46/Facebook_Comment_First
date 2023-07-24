/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url('https://learn.snyk.io/lessons/')
    }

    openFacebook (path) {
        return browser.url('https://www.facebook.com/groups/isct20')
    }
    openRandomUrl(path) {
        return browser.url('https://test.rechargenews.com/')
    }
}
