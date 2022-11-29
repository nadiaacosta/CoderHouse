const menu_responsive = document.querySelector(".menu_responsive");
const navMenu = document.querySelector(".nav_menu");

menu_responsive.addEventListener("click", () => {
    menu_responsive.classList.toggle("active");
    navMenu.classList.toggle("active");

})
