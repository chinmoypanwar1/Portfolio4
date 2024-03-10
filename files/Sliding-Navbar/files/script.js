window.onscroll = function() {
    scroll();
}

function scroll() {
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar").style.top = "0";
        document.querySelector(".navbar").classList.add('slide');
        document.querySelector(".navbar").classList.remove("slide-out");
    }
    else {
        document.querySelector(".navbar").style.top = "-10%";
        document.querySelector(".navbar").classList.remove('slide');
        document.querySelector(".navbar").classList.add('slide-out');
    }
}