

var completed = document.getElementById("completed");
completed.value = 0;
completedNumber.innerText = completed.value + '%';

var loby = true;
var MBuilding = false;
var SBuilding = false;
var Cafeteria = false;

function Progress() {
    if (loby == true) {
        completed.value = completed.value + 20;
        completedNumber.innerText = completed.value + '%';
        document.getElementById("lobby").style.backgroundColor = "var(--complete-color)";

    }
    if (MBuilding == true) {
        completed.value = completed.value + 20;
        completedNumber.innerText = completed.value + '%';
        document.getElementById("Mbuilding").style.backgroundColor = "var(--complete-color)";

    }
    if (SBuilding == true) {
        completed.value = completed.value + 20;
        completedNumber.innerText = completed.value + '%';
        document.getElementById("Sbuilding").style.backgroundColor = "var(--complete-color)";

    }
    if (Cafeteria == true) {
        completed.value = completed.value + 20;
        completedNumber.innerText = completed.value + '%';
        document.getElementById("cafeteria").style.backgroundColor = "var(--complete-color)";

    }

}
Progress();