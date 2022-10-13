const hamburger = document.querySelector("#hamburger-menu");

hamburger.addEventListener("click", (e) => {
    const nav = document.querySelector("#navigation");
    const displayType = (nav.style.display === "none") ? "flex" : "none";
    nav.style.display = displayType;
})
