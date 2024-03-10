const amount = document.getElementById("amount");
const tip = document.getElementById("tip");
const persons = document.getElementById("persons");
const calculate = document.getElementById("calculate");
const result = document.getElementById("show");

calculate.onclick = function() {
    let givetip = ( (Number(amount.value)/Number(persons.value)) * (Number(tip.value)/100) );
    if(amount.value === "" || persons.value === "" ) {
        result.textContent = `Please fill out all of the details`
    }
    else {
        result.textContent = `${givetip} each`;
    }
}