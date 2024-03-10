const person = document.getElementsByClassName("buttons");
const submit = document.getElementById("submit");
const result = document.getElementById("result");


submit.onclick = function() {
    let weight = Number(person[0].value);
    let height = Number(person[1].value);
    let bmi = (weight/(height*height))*10000;
    if(person[0].value === "" || person[1].value === "") {
        result.textContent = `Please fill out the whole form`;
    }
    else {
        if( bmi<18.6 ) {
            result.textContent = `Under-Weight : ${bmi.toFixed(2)}.`;
        }
        else if ( bmi>18.6 && bmi<24.9) {
            result.textContent = `Normal : ${bmi.toFixed(2)}`;
        }
        else {
            result.textContent = `Over-Weight : ${bmi.toFixed(2)}`;
        }
    }
}