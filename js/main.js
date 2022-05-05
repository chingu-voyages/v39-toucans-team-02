let chicken=document.getElementById('chicken');
let salad=document.getElementById('salad');
let papper=document.getElementById('paper');
let onion=document.getElementById('onion');
let wood=document.getElementById('wood');
let text=document.getElementById('home-text');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    chicken.style.left = (value * 1.2) + 'px';
    text.style.top = (value * .8) + 'px';
    paper.style.left = (value * 1.2) + 'px';
    paper.style.top = (value * -.4) + 'px';

    salad.style.left = (value * -.8) + 'px';
    onion.style.left = (value * -.5) + 'px';    
})