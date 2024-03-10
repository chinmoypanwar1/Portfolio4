let speech = new SpeechSynthesisUtterance();

let voices = [];
let btn = document.getElementById("listenbtn");
btn.addEventListener("click" , () => {
    speech.text = document.getElementById("text").value;
    window.speechSynthesis.speak(speech);
});