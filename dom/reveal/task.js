function isVisible(el) {
    const position = el.getBoundingClientRect();
    if (position.bottom < 0 || position.top > window.innerHeight) {
        return false;
    } else {
        return true;
    }
}

reveals = document.querySelectorAll('.reveal')

window.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
        if (isVisible(reveal)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
})
