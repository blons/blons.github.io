const scrollbutton = document.getElementById('scrollbutton')
let oldScroll = 0;
let lock = false;

function goTop() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

window.onscroll = function() {scrollState()}

function scrollState() {
    let sc = window.scrollY;
    if (sc > 300 && sc < oldScroll && lock == false) {
        // scrollbutton.style.display = 'block';
        scrollbutton.classList.add('popup');
        scrollbutton.classList.remove('popdown');
        setTimeout(function(){scrollbutton.style.display = 'block';}, 50);
        lock = true;
        setTimeout(function(){lock = false;}, 750);
    } else if (lock == false){
        // scrollbutton.style.display = 'none';
        scrollbutton.classList.add('popdown');
        scrollbutton.classList.remove('popup');
        setTimeout(function(){scrollbutton.style.display = 'none';}, 100);
        lock = true;
        setTimeout(function(){lock = false;}, 100);
    }
    oldScroll = sc;
}