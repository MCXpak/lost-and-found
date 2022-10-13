const hamburger = document.querySelector("#hamburger-menu");

const toggleNav = () => {

    const nav = document.querySelector("#navigation");
    const displayType = (nav.style.display === "none") ? "flex" : "none";
    nav.style.display = displayType;
}

const toggleNavWrapper = (e) => {
    if ((e.type === "keydown" && e.code === "Enter") || e.type === "click") {
        toggleNav();
    }
}

hamburger.addEventListener("click", toggleNavWrapper);
hamburger.addEventListener("keydown", toggleNavWrapper);

