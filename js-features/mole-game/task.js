let wins = 0;
let loses = 0;

getHole = index => document.getElementById(`hole${index}`);

for (let i=1; i<10; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).className.includes("hole_has-mole")) {
            wins++;
            if (wins >= 10) {
                alert("Победа!!!");
                wins = 0;
                loses = 0;
            }
            document.getElementById("dead").textContent = wins;
            document.getElementById("lost").textContent = loses;
        } else {
            loses++;
            if (loses >= 5) {
                alert("Вы протграли");
                wins = 0;
                loses = 0;
            }
            document.getElementById("dead").textContent = wins;
            document.getElementById("lost").textContent = loses;
        }
    }
}