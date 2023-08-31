const currentDate = new Date();

class Utility {

    getCurrentTime () {
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        return `${hours}${minutes}${seconds}`
    }
}
module.exports = new Utility()