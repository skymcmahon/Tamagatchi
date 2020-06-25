class tomagotchi{
    constructor(hungerResistance, tiredResistance, bordomResistance){
        this.hungerResistance = hungerResistance || Math.floor((Math.random() * (.2 - .15 + .1) + .15)* 10) /10;
        this.tiredResistance = tiredResistance || Math.floor((Math.random() * (.2 - .15 + .1) + .15)* 10) /10;
        this.bordomResistance = bordomResistance ||  Math.floor((Math.random() * (.2 - .15 + .1) + .15)* 10) /10;
        this.hunger = 0;
        this.tiredness = 0;
        this.bordom = 0;
        this.age = 0;
        this.name = '';
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


const billy = new tomagotchi();
// console.log(billy);


//----------functions----------
function updateAge() {
    const age = document.getElementById('age');
    billy.age += 1
    age.innerText = `Billy age: ${billy.age}`;
};

function updateStats() {
    if (Math.random() > billy.bordomResistance){
        billy.bordom += 1;
    } else {
        console.log('Billy resisted bordom');
    }

    if (Math.random() > billy.tiredResistance){
        billy.tiredness += 1;
    } else {
        console.log('Billy resisted Sleep');
    }

    if (Math.random() > billy.hungerResistance){
        billy.hunger += 1;
    } else {
        console.log('Billy resisted hunger');
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
            console.log(billy);
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




// ---------DOM Elements-------------
const introScreen = document.getElementById('introScreen');
// const yes = document.getElementById('yes');
// const no = document.getElementById('no');
const game = document.getElementById('invisible');
const feed = findElement('#button1')
const sleep = findElement('#button2')
const play = findElement('#button3')

// ---------handle functions----------
function handleYesButton(){
    console.log('YES');
    // removeIntro();
    startTimer();
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


//----------event listeners----------

// yes.addEventListener('click', handleYesButton);
// no.addEventListener('click', handleNoButton);
feed.addEventListener('click', handleFeedButton);
sleep.addEventListener('click', handleSleepButton);
play.addEventListener('click', handlePlayButton);

//----------temp----------


// startTimer()
// function fakeLog(){
//     console.log('This is not a test!');
// };

// Jimmy Functions

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