const sizes = document.querySelectorAll('.font-size');
const textColors = document.querySelectorAll('.book__control_color .color');
const bgColors = document.querySelectorAll('.book__control_background .color');

const book = document.querySelector('.book');

sizes.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        sizes.forEach(itemClear => {
            itemClear.classList.remove('font-size_active');
        })
        item.classList.add('font-size_active')
        switch (item.dataset.size) {
            case 'small':
                book.classList.remove('book_fs-big');
                book.classList.add('book_fs-small');
                break;
            case 'big':
                book.classList.remove('book_fs-small');
                book.classList.add('book_fs-big');
                break;
            default:
                book.classList.remove('book_fs-small');
                book.classList.remove('book_fs-big');
                break;
        }
    })
})

textColors.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        textColors.forEach(itemClear => {
            itemClear.classList.remove('color_active');
        })
        item.classList.add('color_active')
        switch (item.dataset.textColor) {
            case 'gray':
                book.classList.remove('book_color-whitesmoke');
                book.classList.remove('book_color-black');
                book.classList.add('book_color-gray');
                break;
            case 'whitesmoke':
                book.classList.remove('book_color-black');
                book.classList.remove('book_color-gray');
                book.classList.add('book_color-whitesmoke');
                break;
            default:
                book.classList.remove('book_color-gray');
                book.classList.remove('book_color-whitesmoke');
                book.classList.add('book_color-black');
                break;
        }
    })
})

bgColors.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        bgColors.forEach(itemClear => {
            itemClear.classList.remove('color_active');
        })
        item.classList.add('color_active')
        switch (item.dataset.bgColor) {
            case 'gray':
                book.classList.remove('book_bg-white');
                book.classList.remove('book_bg-black');
                book.classList.add('book_bg-gray');
                break;
            case 'black':
                book.classList.remove('book_bg-white');
                book.classList.remove('book_bg-gray');
                book.classList.add('book_bg-black');
                break;
            default:
                book.classList.remove('book_bg-gray');
                book.classList.remove('book_bg-black');
                book.classList.add('book_bg-white');
                break;
        }
    })
})
