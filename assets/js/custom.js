let label = document.querySelector("label");
let menu = document.querySelector(".menu");

label.addEventListener("click", () => {
    label.classList.toggle("active");
    menu.classList.toggle("active-menu");
    menu.classList.toggle("d-none");
    document.body.classList.toggle("overflow-y-hidden");
});