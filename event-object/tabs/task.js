const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');
let currentTab = 0;

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.item(currentTab).classList.remove('tab_active');
        contents.item(currentTab).classList.remove('tab__content_active');
        currentTab = index;
        tabs.item(currentTab).classList.add('tab_active');
        contents.item(currentTab).classList.add('tab__content_active');
    })
})