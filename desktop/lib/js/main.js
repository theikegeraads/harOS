/**
 * Function to show or hide the start menu.
 *
 * @param {*} state
 * @example start(show);
 * @author keanucode 
 */
function start(state) {
    startMenu = document.getElementById('startMenu')
    switch (state) {
        case "show": {
            startMenu.style.visibility = "visible";
            break;
        }
        case "hide": {
            startMenu.style.visibility = "hidden";
            break;
        }
    }
}

/**
 * Function to fade out an element.
 *
 * @param {*} element
 * @param {string} page
 * @example fade(h1);
 * @author keanucode
 */
async function fade(element, page = "none") {
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

    switch (page) {
        case "none": {
            return;
            break;
        }
        case "login": {
            window.location.href = '../login.html';
            break;
        }
        case "start": {
            window.location.href = '../index.html';
            break;
        }
    }
}