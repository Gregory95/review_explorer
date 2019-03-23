const openButton = document.querySelector(".button");
const header = document.querySelector("header");
const closeButton = document.querySelector(".closeButton");

openButton.addEventListener("click", () => {
    header.style.transform = "translateY(0%)";
    openButton.style.display = "none";
});

closeButton.addEventListener("click", () => {
    header.style.transform = "translateY(-100%)";
    setTimeout(() => {
        openButton.style.display = "flex";
    }, 400);
});
