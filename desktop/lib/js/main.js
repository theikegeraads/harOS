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
    window.location.href = "../index.html";
}

function shutDown() {
    fade(blackScreen)
}