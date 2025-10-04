const timer = document.getElementById("timer");
console.log(Number(timer.textContent))
let currentTimer = Number(timer.textContent);

const countdown = setInterval(() => {
    currentTimer--;
    timer.textContent = ((period) => {
        let seconds = period % 60;
        period = (period - seconds) / 60;
        let minutes = period % 60;
        let hours = (period - minutes) / 60;
        seconds = new Intl.NumberFormat("ru", {minimumIntegerDigits: 2}).format(seconds);
        minutes = new Intl.NumberFormat("ru", {minimumIntegerDigits: 2}).format(minutes);
        hours = new Intl.NumberFormat("ru", {minimumIntegerDigits: 2}).format(hours);
        return `${hours}:${minutes}:${seconds}`
    })(currentTimer);
    if (currentTimer === 0) {
        clearInterval(countdown);
        setTimeout(() => {
            alert("Вы победили в конкурсе!")
        }, 100)
    }
}, 1000);
