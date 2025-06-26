const hamburguerBtn = document.querySelector(".header_menu-button")
const menu = document.querySelector(".header_menu")


hamburguerBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})

