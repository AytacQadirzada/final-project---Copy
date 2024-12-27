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

//tariffs
document.getElementById('abs-btn').addEventListener('click', function() {
    document.getElementById('abs').classList.add('active');
    document.getElementById('abs').classList.remove('dis-none');
    document.getElementById('turkiye').classList.remove('active');
    document.getElementById('turkiye').classList.add('dis-none');
    document.getElementById('daxili').classList.remove('active');
    document.getElementById('daxili').classList.add('dis-none');
});

document.getElementById('turkiye-btn').addEventListener('click', function() {
    document.getElementById('abs').classList.remove('active');
    document.getElementById('abs').classList.add('dis-none');
    document.getElementById('turkiye').classList.add('active');
    document.getElementById('turkiye').classList.remove('dis-none');
    document.getElementById('daxili').classList.remove('active');
    document.getElementById('daxili').classList.add('dis-none');
});

document.getElementById('daxili-btn').addEventListener('click', function() {
    document.getElementById('abs').classList.remove('active');
    document.getElementById('abs').classList.add('dis-none');
    document.getElementById('turkiye').classList.remove('active');
    document.getElementById('turkiye').classList.add('dis-none');
    document.getElementById('daxili').classList.add('active');
    document.getElementById('daxili').classList.remove('dis-none');
});
