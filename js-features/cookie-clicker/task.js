const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speedLine = document.getElementById("clicker__speed");
let count = Number(counter.textContent);
let diff = 20;
let start = Date.now();

cookie.onclick = () => {
    count++;
    const seconds = (Date.now() - start) / 1000;
    const speed = count / seconds;
    const speedFmt = new Intl.NumberFormat("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(speed);
    counter.textContent = count;
    speedLine.textContent = speedFmt;
    cookie.width = cookie.width + diff;
    diff = -diff;
}
