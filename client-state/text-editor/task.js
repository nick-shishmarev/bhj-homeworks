const card = document.getElementById('editor');
const btn = document.querySelector('.clear-btn');

// function saveText() {
//     localStorage.setItem('text', card.value);
// }

// function getText() {
//     if ('text' in localStorage) {
//         return localStorage.getItem('text');
//     } else {
//         return '';
//     }
// }

card.textContent = localStorage.getItem('text') || '';

card.oninput = () => {
    localStorage.setItem('text', card.value);
}

btn.onclick = () => {
    card.value = '';
    localStorage.removeItem('text');
}
