let start = document.getElementById('start');
let initiate = document.getElementById('initiate');
let presentationSlides = document.getElementById('presentation-slides');
/*let slideOne = document.getElementById('slide-one')
let slideOneTitle = document.getElementById('slide-one-title');
let next = document.getElementById('next');*/

presentationSlides.style.display = 'none';
/*slideOneTitle.style.display = 'none';
slideOne.style.display = 'none';
next.style.display = 'none';*/

function startPresentation() {
    start.style.display = 'none';
    presentationSlides.style.display = 'flex';
    /*slideOneTitle.style.display = 'flex';
    slideOne.style.display = 'flex';
    slideOne.style.flexDirection = 'row';
    next.style.display = 'flex';*/
}

initiate.addEventListener('click', startPresentation);