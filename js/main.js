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


let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
