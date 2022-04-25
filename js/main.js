let chicken=document.getElementById('chicken');
let salad=document.getElementById('salad');
let papper=document.getElementById('papper');
let onion=document.getElementById('onion');
let wood=document.getElementById('wood');

window.addEventListener('scroll', function(){
    let value=window.scrollY;
    wood.style.left=value + 'px';
    
})