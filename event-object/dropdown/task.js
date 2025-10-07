const buttons = document.querySelectorAll('.dropdown__value');
const menuList = Array.from(document.querySelectorAll('.dropdown__link'));

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const menu = button.closest('.dropdown').querySelector('.dropdown__list');
        menu.classList.add('dropdown__list_active');
    })
})

menuList.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const buttonToChange = item.closest('.dropdown').querySelector('.dropdown__value');
        buttonToChange.textContent = item.textContent;
        item.closest('.dropdown__list').classList.remove('dropdown__list_active');
    })
})