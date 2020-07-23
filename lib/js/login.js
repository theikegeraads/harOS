/**
 * Function to fade out an element.
 *
 * @param {*} element
 * @example fade(h1);
 * @author keanucode
 */
async function fade(element) {
    await new Promise(r => setTimeout(r, 1000));
    var op = 0.1;
    element.style.display = "block";
    var timer = setInterval(() => {
        if (op >= 1) {
            clearInterval(timer)
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        element.style.zIndex = "20000";
        op += op * 0.1;
    }, 10)
    await new Promise(r => setTimeout(r, 500))
    window.location.href = "./desktop/desktop.html";
}

function sureHaije() {
    loginScreen = document.getElementById('loginContent')
    leaveScreen = document.getElementById('leaveContent')
    loginScreen.style.visibility = "hidden"
    leaveScreen.style.visibility = "visible"
}

function back() {
    loginScreen = document.getElementById('loginContent')
    leaveScreen = document.getElementById('leaveContent')
    loginScreen.style.visibility = "visible"
    leaveScreen.style.visibility = "hidden"

}
async function haije() {
    leaveScreen = document.getElementById('leaveContent')
    haijeScreen = document.getElementById('exitContent')
    leaveScreen.style.visibility = "hidden"
    haijeScreen.style.visibility = "visible"
    await new Promise(r => setTimeout(r, 500))
    fade(blackScreen)
}
async function login() {
    fade(blackScreen)
}