// Parallaxe 
let sky = document.getElementById("sky");
let earth = document.getElementById("earth");
let moon = document.getElementById("moon");
let moon2 = document.getElementById("moon2");
let bloc = document.getElementById("title");
let title = document.getElementById("presentation");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    
    sky.style.left = value + 0.2 + 'px';
    sky.style.top = -value + 0.2 + 'px';
    earth.style.top = -value + 2 + 'px';
    earth.style.left = -value + 0.15 + 'px';
    moon2.style.top = value + 0.1 + 'px';
    // moon.style.bottom = -value + 2 + 'px';
    bloc.style.top= value + 0.15 + 'px';
    title.style.top= value + 2 + 'px';
})


// Fin de parallaxe

function myFunction() {
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}