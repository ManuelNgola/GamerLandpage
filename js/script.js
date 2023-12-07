let slides = document.querySelectorAll('.slide-container');
let index = 0;

function nextImag(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prevImg() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
setInterval(nextImag, 7000);