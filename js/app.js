class tomagotchi{
    constructor(hungerResistance, tiredResistance, bordomResistance){
        this.hungerResistance = hungerResistance || Math.floor((Math.random() * (.2 - .15 + .1) + .15)* 10) /10;
        this.tiredResistance = tiredResistance || Math.floor((Math.random() * (.6 - .4 + .1) + .4)* 10) /10;
        this.bordomResistance = bordomResistance ||  Math.floor((Math.random() * (.2 - .15 + .1) + .15)* 10) /10;
        this.hunger = 0;
        this.tiredness = 0;
        this.bordom = 0;
        this.age = 0;
        // this.name = '';
    }
    //----------methods----------
       //eat
    eat() {
        this.hunger = 0;
        console.log('ate food');
    }
       //sleep
    sleep() {
        this.tiredness = 0;
        console.log('took a nap');
    }
       //play
    play() {
        this.bordom = 0;
        console.log('played with toys');
    }
};
//----------Universal stuff----------
let time = 0;
let name = ''

const pet = new tomagotchi();
// console.log(pet);


//----------functions----------
function updateAge() {
    const age = findElement('.age');
    pet.age += 1
    age.innerText = `${name} age: ${pet.age}`;
};

function updateStats() {
    if (Math.random() > pet.bordomResistance){
        pet.bordom += 1;
        boredElement.innerText = `Bored: ${pet.bordom}`;
    } else {
        console.log('pet resisted bordom');
    }

    if (Math.random() > pet.tiredResistance){
        pet.tiredness += 1;
        tiredElement.innerText = `Tired: ${pet.tiredness}`;
    } else {
        console.log('pet resisted Sleep');
    }

    if (Math.random() > pet.hungerResistance){
        pet.hunger += 1;
        hungryElement.innerText = `Hungry: ${pet.hunger}`
    } else {
        console.log('pet resisted hunger');
    }
};

function updateTime(){

}

function startTimer(){
    const timer = setInterval(function (){
        if (time < 60){
            time++;
            console.log(time);
            if (time % 3 === 0){
                updateStats();
            console.log('stats updated');
            }else if(time % 10 === 0){
                updateAge();
                console.log('age updated');
            }
        // // }else if (time === 10){
        // //     updateAge();
        // }else if (time % 3 === 0){
        //     updateStats();
        //     console.log('stats updated');
        } 
        else{
            console.log('Time is up');
            console.log(pet);
            clearInterval(timer);
        }
    }, 1000);
};

function removeIntro(){
    // introScreen.id = 'invisible';
    if (introScreen.id !== 'invisible'){
        introScreen.id = 'invisible';
    }else {
        introScreen.id = 'introScreen';
    }

};

function displayGame(){
    if (game.id !== 'invisible'){
        game.id = 'invisible';
    }else {
        game.id = 'game';
    }
};

// function updateTime(params) {
//     const timer = document.getElementById('timer');
//     timer.innerText = `Timer: ${time}s`;
// }



// ---------DOM Elements-------------
const introScreen = document.getElementById('introScreen');
// const yes = document.getElementById('yes');
// const no = document.getElementById('no');
const game = document.getElementById('invisible');
const feed = findElement('#button1');
const sleep = findElement('#button2');
const play = findElement('#button3');
const startGame = findElement('#startGameButton');
const hungryElement = findElement('.hungry');
const tiredElement = findElement('.tired');
const boredElement = findElement('.bored');
const image = findElement('.image');


console.log(image);

// ---------handle functions----------
function handleYesButton(){
    console.log('YES');
    // removeIntro();
    // startTimer();
    // displayGame();
    alert('Yes!');
};

function handleNoButton(){
    console.log('No!!!');
    removeIntro();
    alert('no');
};

function handleFeedButton(){
console.log('you pressed feed');
};

function handleSleepButton(){
console.log('you pressed sleep');
};

function handlePlayButton(){
console.log('you pressed play');
};

function handleStartGameButton(){
    startTimer();
    alert('ready?');
    getInputValue();
    updateAge();
};

function getInputValue(){
    // Selecting the input element and get its value 
    name = document.getElementById("input").value;
    // Displaying the value
    // alert(inputVal);
}


//----------event listeners----------

// yes.addEventListener('click', handleYesButton);
// no.addEventListener('click', handleNoButton);
feed.addEventListener('click', handleFeedButton);
sleep.addEventListener('click', handleSleepButton);
play.addEventListener('click', handlePlayButton);
startGame.addEventListener('click', handleStartGameButton)
//----------temp----------


// startTimer()
// function fakeLog(){
//     console.log('This is not a test!');
// };

// Jimmy Query

function createElement(type,id,className,textContent,parent) {
    let newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    newElement.textContent = textContent;
    (parent) ? parent.appendChild(newElement) : document.body.appendChild(newElement);
    return newElement;
  }
function findElement(query, isMulti = false) {
    return (!isMulti) ?
            document.querySelector(query) :
            document.querySelectorAll(query);
}