
const rotators = Array.from(document.querySelectorAll('.rotator__case'));
let currentIndex = rotators.length - 1;
let interval = 1000;

function showAdv() {
    rotators[currentIndex].classList.remove('rotator__case_active');

    if (currentIndex >= rotators.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    rotators[currentIndex].classList.add('rotator__case_active');
    rotators[currentIndex].style.color=rotators[currentIndex].dataset.color;
    interval = Number(rotators[currentIndex].dataset.speed);
    setTimeout(showAdv, interval);
}

showAdv();