const modal = document.querySelector('#subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if (!isCookie('modalclosed')) {
    modal.classList.add('modal_active')
}

modalClose.onclick = () => {
    setCookie('modalclosed', 'yes');
    modal.classList.remove('modal_active');
}

function setCookie(key, value) {
    document.cookie = `${key}=${value}`;
}

function isCookie(key) {
    return document.cookie.includes(key + '=');
}