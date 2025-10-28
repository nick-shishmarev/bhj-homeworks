const signin = document.querySelector('#signin');
const forma = document.querySelector('#signin__form');
const btn = document.querySelector('#signin__btn');
const welcome = document.querySelector('#welcome');
const userField = document.querySelector('#user_id');
const logout = document.querySelector('#logout');

let userId = null;
const urlSite = 'https://students.netoservices.ru/nestjs-backend/auth';

if ('user' in localStorage) {
    userId = localStorage.getItem('user');
    showUser(userId);
} else {
    signin.classList.add('signin_active');
}

forma.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(forma);
    sendRequest(formData, 'POST', urlSite);
})

logout.addEventListener('click', () =>{
    removeUser();
    hideUser();
})

function showUser(user) {
    forma.reset();
    userField.textContent = user;
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    logout.classList.add('logout_active');
}

function hideUser(user) {
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
    logout.classList.remove('logout_active');
}

function saveUser(user) {
    localStorage.setItem('user', user);
}

function removeUser() {
    localStorage.removeItem('user');
}

async function sendRequest(form, method, url) {
    const response = await fetch(url, {
        method: method,
        body: form,
    })
    resp = await response.json();
    if (response.ok) {
        if (resp.success) {
            userId = resp.user_id;
            saveUser(userId);
            showUser(userId);
        } else {
            alert("Неверный логин/пароль")
        }
    } else {
        alert(`Ошибка: ${resp.statusCode} ${resp.message}`)
    }
}
