//header

let menu = document.querySelectorAll('.menu-text');
menu.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.toggle("hover-element");
    });
    item.addEventListener("mouseout", () => {
        item.classList.toggle("hover-element");
    });
});

let login = document.querySelector(".login");

login.addEventListener("mouseover", () => {
    login.classList.toggle("login-hover");
});
login.addEventListener("mouseout", () => {
    login.classList.toggle("login-hover");
});
// Burger menu toggle
const burgerMenu = document.querySelector('.burger-menu');
const menuMobile = document.querySelector('.menu-mobile');

burgerMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('dis-none');
});

document.querySelector('.search-container button').addEventListener('click', () => {
    const searchValue = document.querySelector('.search-container input').value.toLowerCase();
    const shops = document.querySelectorAll('.shop');

    shops.forEach((shop) => {
        const shopName = shop.getAttribute('data-name').toLowerCase();
        if (shopName.includes(searchValue)) {
            shop.classList.remove('dis-none')
        } else {
            shop.classList.add('dis-none');
        }
    });
});

document.querySelector('.search-container input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.search-container button').click();
    }
});