
let start = document.getElementById('start');
let initiate = document.getElementById('initiate');
let slideOne = document.getElementById('slide-one');
let slideTwo = document.getElementById('slide-two');
let nextOne = document.getElementById('next-one');
let slideThree = document.getElementById('slide-three');
let nextTwo = document.getElementById('next-two');
let slideFour = document.getElementById('slide-four');
let nextThree = document.getElementById('next-three');
let nextFour = document.getElementById('next-four');

slideOne.style.display = 'none';
slideTwo.style.display = 'none';
slideThree.style.display = 'none';
slideFour.style.display = 'none';

function startPresentation() {
    start.style.display = 'none';
    slideOne.style.display = 'flex';
}

initiate.addEventListener('click', startPresentation);

function moveToSlideTwo() {
    slideOne.style.display = 'none';
    slideTwo.style.display = 'flex';
}

nextOne.addEventListener('click', moveToSlideTwo);

function moveToSlideThree() {
    slideTwo.style.display = 'none';
    slideThree.style.display = 'flex';
}

nextTwo.addEventListener('click', moveToSlideThree);

function moveToSlideFour() {
    slideThree.style.display = 'none';
    slideFour.style.display = 'flex';
}

nextThree.addEventListener('click', moveToSlideFour);

function startOver() {
    slideFour.style.display = 'none';
    start.style.display = 'flex';
}

nextFour.addEventListener('click', startOver);
