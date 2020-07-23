async function check() {
    bar = document.getElementById("loadingBar")
    progressText = document.getElementById("topText")
    lobText = document.getElementById("LOB")
    fishText = document.getElementById("maas")
    watsjText = document.getElementById("watsj")
    ninjaText = document.getElementById("ninja")
    wokText = document.getElementById("wok")
    installText = document.getElementById("load")

    await new Promise(r => setTimeout(r, 2000));
    lobText.style.visibility = "visible"
    installText.innerText = "Installing FISHHEE LANGS DE MAAAAAAAAAS.."
    await new Promise(r => setTimeout(r, 2000));
    fishText.style.visibility = "visible"
    installText.innerText = "Installing Oerwatsj.."
    await new Promise(r => setTimeout(r, 2000));
    watsjText.style.visibility = "visible"
    installText.innerText = "Loading Ninja Geluiden.."
    await new Promise(r => setTimeout(r, 2000));
    progressText.innerText = "Almost There..."
    ninjaText.style.visibility = "visible"
    installText.innerText = "Installing Wok.."
    await new Promise(r => setTimeout(r, 1000));
    installText.innerText = "Done!"
    wokText.style.visibility = "visible"
    await new Promise(r => setTimeout(r, 1000));
    progressText.innerText = "Ready!"
    await new Promise(r => setTimeout(r, 1000));
    fade(blackScreen)
}

async function fade(element) {

    var op = 0.1;
    element.style.display = "block";
    var timer = setInterval(() => {
        if (op >= 1) {
            clearInterval(timer)
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op += op * 0.1;
    }, 10)
    await new Promise(r => setTimeout(r, 500))
    window.location.href = "../login.html";

}
check()