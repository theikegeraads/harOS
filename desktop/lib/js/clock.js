/**
 * Function to fetch the current time and display it in the clock div.
 * @author keanucode
 */
function currentTime() {
    var date = new Date(); /* Create the Date object */
    var hour = date.getHours();
    var min = date.getMinutes();
    hour = updateTime(hour);
    min = updateTime(min);
    document.getElementById("clock").innerText = hour + " : " + min; /* Set the time in the div */
    var t = setTimeout(function () {
        currentTime()
    }, 1000); /* Running the update every second. */
}

/**
 * Function to update the time displayed on the clock.
 * @author keanucode
 */
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime();