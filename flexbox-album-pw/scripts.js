function dropdown() {
    var show = window.document.querySelector("nav.menu-container");
    if (show.className == "menu-container") {
        show.className += " responsive";
    } else {
        show.className = "menu-container";
    }
}
