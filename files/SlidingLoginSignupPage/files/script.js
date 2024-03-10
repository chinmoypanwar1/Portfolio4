const lsignup = document.getElementById("lsignup");
const slogin = document.getElementById("slogin");
const slide = document.getElementById("slide");

lsignup.onclick = function() {
    slide.classList.add("slider");
}
slogin.onclick = function() {
    slide.classList.remove("slider");
}