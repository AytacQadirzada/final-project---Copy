document.querySelector('.register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.querySelector('.first-name').value;
    let lastName = document.querySelector('.last-name').value;
    let email = document.querySelector('.email').value;
    let address = document.querySelector('.address').value;
    let finCode = document.querySelector('.fin-code').value;
    let phoneNumber = document.querySelector('.phone-number').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let message = document.querySelector('.message');

    if (password !== confirmPassword) {
        message.textContent = 'Şifrələr uyğun deyil!';
        return;
    }

    message.style.color = 'green';
    message.textContent = 'Qeydiyyat uğurla tamamlandı!';

    if(message.textContent == "Qeydiyyat uğurla tamamlandı!"){
    firstName="";
    lastName="";
    email="";
    address="";
    finCode="";
    phoneNumber="";
    password="";
    confirmPassword="";
    }
    
});


document.getElementById('show-password').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    let confirmPasswordField = document.getElementById('confirm-password');
    if (this.checked) {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
        }
    });
    // Burger menu toggle
const burgerMenu = document.querySelector('.burger-menu');
const menuMobile = document.querySelector('.menu-mobile');

burgerMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('dis-none');
});