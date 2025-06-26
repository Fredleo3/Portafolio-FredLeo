const hamburguerBtn = document.querySelectorAll(".header_menu-button")
const menu = document.querySelector(".header_menu")




hamburguerBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})

