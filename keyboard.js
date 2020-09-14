
// Hide squares on default and display them once playNote() runs
document.getElementById("square-column").style.display = "none";
let displaySquares = () => {
    document.getElementById("square-column").style.display = "block";
}

/*
PIANO 
*/

// Grab all the keys
const keys = document.querySelectorAll('.key');
const blackKeys = document.querySelectorAll('.key.black');
const whiteKeys = document.querySelectorAll('.key.white');

// Arrays to grab typing keys
const blackKeyLetters = ["r", "t", "y", "u", "i"];
const whiteKeyLetters = ["d", "f", "g", "h", "j", "k", "l"];

/* For each key: event listener which takes two params:
    1. 'Click' event
    2. playNote(key) function which plays given mp3 file
*/
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

// Event listener grabs key that user presses, finds a matching index and runs playnote()
document.addEventListener('keydown', event => {
    if (event.repeat) return;
    const pressedKey = event.key; // get key that is pressed
    const blackKeyIndex = blackKeyLetters.indexOf(pressedKey);
    const whiteKeyIndex = whiteKeyLetters.indexOf(pressedKey); 

    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]); 
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]); 

});

/*
playnote(key) function:
    1. Grab data-note, assign it to 'audio' variable
    2. currentTime property set to 0 so the audio restarts as soon as user clicks again
    3. keyAudio.play(): plays audio
    4. Add a class to key to set style on keys when they are clicked
    5. Add eventListener to 'keyAudio' which removes 'active' class (removes css 'active' styles)
*/
const playNote = (key) => {
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0; 
    audio.play();
    key.classList.add('active');
    audio.addEventListener('ended', () => {
        key.classList.remove('active')
    });
    displaySquares();
    playAnimation();
    addToCounter();
}

/*
ANIMATION
*/
const playAnimation = () => {
    let animation = anime({
        targets: '.square1, .square2, .square3, .square4, .square5, .square6, .square7, .square8, .square9', 
        translateX: function() { return anime.random(-600, 600)},
        translateY: function() { return anime.random(200, 700) },
        rotate: function() { return anime.random(-500,500); },
        duration: function() { return anime.random(1000,3000); },
        scale: [
            {value: .1, easing: 'linear', duration: 300},
            {value: 1, easing: 'linear', duration: 200},
            function() { return anime.random(10,22) / 10; },
        ],  
    });
}

/*
COUNTER
*/
let counter = 0;

let addToCounter = () => {
    counter += 1;
    document.getElementById("displayCount").innerHTML = counter;
}
let resetCounter = () => {
    counter = 0;
    document.getElementById("displayCount").innerHTML = counter;
}
let hideCounter = () => {
    document.getElementById("displayCount").style.display = "none";
};
let showCounter = () => {
    document.getElementById("displayCount").style.display = "block";
}


/*
OPTIONS MODAL
*/
let optionsModal = document.getElementById("optionsModal");
let openModalBtn = document.getElementById("optionsBtn");
let closeModalBtn = document.getElementsByClassName("closeOptionsModal")[0];

// When the user clicks on the button, open the modal 
openModalBtn.onclick = function() {
    optionsModal.classList.add('show');
}
// When the user clicks on <span> (x), close the modal
closeModalBtn.onclick = function() {
    optionsModal.classList.remove('show');
}

/*
OPTIONS: COLOR CHANGE
*/
const squares = document.querySelectorAll('.square');

const changeSquaresBlue = () => {
    squares.forEach(square => {
        square.style.backgroundColor = "blue";
        square.style.boxShadow = "0 0 0px lightblue, 0 0 3px lightblue, 0 0 6px lightblue, 0 0 9px lightblue, 0 0 12px lightblue, 0 0 15px lightblue, 0 0 18px lightblue";
    })
}
const changeSquaresYellow = () => {
    squares.forEach(square => {
        square.style.backgroundColor = "orange";
        square.style.boxShadow = "0 0 0px #ffff4d, 0 0 3px #ffff4d, 0 0 6px #ffff4d, 0 0 9px #ffff4d, 0 0 12px #ffff4d, 0 0 15px #ffff4d, 0 0 18px #ffff4d";
    })
}
const changeSquaresRed = () => {
    squares.forEach(square => {
        square.style.backgroundColor = "red";
        square.style.boxShadow = "0 0 0px #FFB7B7, 0 0 3px #FFB7B7, 0 0 6px #FFB7B7, 0 0 9px #FFB7B7, 0 0 12px #FFB7B7, 0 0 15px #FFB7B7, 0 0 18px #FFB7B7";
    })
}
const changeSquaresPink = () => {
    squares.forEach(square => {
        square.style.backgroundColor = "#cc5490";
        square.style.boxShadow = "0 0 0px #FFB7B7, 0 0 3px #FFB7B7, 0 0 6px #FFB7B7, 0 0 9px #FFB7B7, 0 0 12px #FFB7B7, 0 0 15px #FFB7B7, 0 0 18px #FFB7B7";
    })
}

let blueButtonActive = () => {
    let blueBtn = document.getElementById('blueBtn');
    blueBtn.classList.add("blueBtnSelected");

    yellowBtn.classList.remove("yellowBtnSelected");
    redBtn.classList.remove("redBtnSelected");
    pinkBtn.classList.remove("pinkBtnSelected");
}
let yellowButtonActive = () => {
    let yellowBtn = document.getElementById('yellowBtn');
    yellowBtn.classList.add("yellowBtnSelected");

    redBtn.classList.remove("redBtnSelected");
    pinkBtn.classList.remove("pinkBtnSelected");
    blueBtn.classList.remove("blueBtnSelected");
}
let redButtonActive = () => {
    let redBtn = document.getElementById('redBtn');
    redBtn.classList.add("redBtnSelected");

    pinkBtn.classList.remove("pinkBtnSelected");
    blueBtn.classList.remove("blueBtnSelected");
    yellowBtn.classList.remove("yellowBtnSelected");
}
let pinkButtonActive = () => {
    let pinkBtn = document.getElementById('pinkBtn');
    pinkBtn.classList.add("pinkBtnSelected");

    redBtn.classList.remove("redBtnSelected");
    blueBtn.classList.remove("blueBtnSelected");
    yellowBtn.classList.remove("yellowBtnSelected");
}

let hideButtonActive = () => {
    let hideCounterBtn = document.getElementById('hideCounterBtn');
    hideCounterBtn.classList.add("hideCounterBtnSelected")
    showCounterBtn.classList.remove("showCounterBtnSelected")
}
let showButtonActive = () => {
    let showCounterBtn = document.getElementById('showCounterBtn');
    showCounterBtn.classList.add("showCounterBtnSelected")
    hideCounterBtn.classList.remove("hideCounterBtnSelected")
}
