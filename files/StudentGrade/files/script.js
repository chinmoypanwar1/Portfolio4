const subject = document.getElementsByClassName("buttons");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let marks = 0;

submit.onclick = function() {
    for(let i=0; i<4; i++) {
        marks = marks + Number(subject[i].value);
    }
    let percentage = (marks/400)*100;
    let flag = 0;
    for(let i=0; i<4; i++) {
        if(subject[i].value === "") flag = 1;
    }
    if(flag !== 1) {
        result.textContent = `You have got ${marks}marks out of 400 and have got ${percentage.toFixed(2)}%.`;
    }
    else {
        result.textContent = `Please fill out the whole form`;
    }
}