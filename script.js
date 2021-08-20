let start = document.getElementById('start');
let initiate = document.getElementById('initiate');
let slideOne = document.getElementById('slide-one');
let slideOneTitle = document.getElementById('slide-one-title');

slideOneTitle.style.display = 'none';
slideOne.style.display = 'none';

function startPresentation() {
    start.style.display = 'none';
    slideOneTitle.style.display = 'flex';
    slideOne.style.display = 'flex';
}

initiate.addEventListener('click', startPresentation);