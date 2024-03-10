document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll('.layer').forEach(function(move){
        var move_value = move.getAttribute("data-speed");
        var x = (e.clientX * move_value)/100;
        var y = (e.clientY * move_value)/100;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}