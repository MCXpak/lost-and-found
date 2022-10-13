const hamburger = document.querySelector("#hamburger-menu");

const toggleNav = () => {

    const nav = document.querySelector("#navigation");
    nav.classList.toggle("hidden-on-mobile")
}

const toggleNavWrapper = (e) => {
    if ((e.type === "keydown" && e.code === "Enter") || e.type === "click") {
        toggleNav();
    }
}

hamburger.addEventListener("click", toggleNavWrapper);
hamburger.addEventListener("keydown", toggleNavWrapper);

