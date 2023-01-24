const btnMenu = document.querySelector(".header__button--menu");
const btnAdmin = document.querySelector(".header__button--admin");
let menu = document.querySelector(".sections--menu");
const btnCloseMenu = document.querySelector(".sections__buttonClose--menu");

btnMenu.addEventListener('click', () => { 
    menu.classList.toggle("sections--disabled");
});
btnAdmin.addEventListener('click', () => {
    menu.classList.toggle("sections--disabled");
});
btnCloseMenu.addEventListener('click', () => {
    menu.classList.toggle("sections--disabled");
});