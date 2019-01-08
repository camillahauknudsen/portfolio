window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#myTopnav").classList.add("hide");
    document.querySelector("#about").classList.add("hide");



    document.querySelector("#play_button").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hide start");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", showAbout);
}

function showAbout() {
    console.log("showAbout");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#about").classList.remove("hide");
    document.querySelector("#myTopnav").classList.remove("hide");
}
