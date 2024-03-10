const cash = document.getElementById("billAmount");
const cashGiven = document.getElementById("cashGiven");
const buttn = document.getElementById("calculate");
const notes = document.getElementsByClassName("notes");


buttn.onclick = function() {
    
    let num = Number(cashGiven.value) - Number(cash.value);
    notes[0].innerHTML = Math.trunc((num/2000));
    num = num%2000;
    notes[1].innerHTML = Math.trunc((num/500));
    num = num%500;
    notes[2].innerHTML = Math.trunc(num/100);
    num = num%100;
    notes[3].innerHTML = Math.trunc(num/50);
    num = num%50;
    notes[4].innerHTML = Math.trunc(num/10);
    num = num%20;
    notes[5].innerHTML = Math.trunc(num/5);
    num = num%5;
    notes[6].innerHTML = Math.trunc(num/1);
    num = num%1;

}