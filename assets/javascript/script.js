const hamburguerBtn = document.querySelector(".header_menu-button")
const hbgrBtnLine1 = document.querySelector(".bar-1")
const hbgrBtnLine2 = document.querySelector(".bar-2")
const hbgrBtnLine3 = document.querySelector(".bar-3")
const menu = document.querySelector(".header_menu")


hamburguerBtn.addEventListener("click", () => {
    // menu.classList.toggle("hidden")
    menu.classList.toggle("animation")
    hbgrBtnLine1.classList.toggle("animation")    
    hbgrBtnLine2.classList.toggle("animation")    
    hbgrBtnLine3.classList.toggle("animation")
})

