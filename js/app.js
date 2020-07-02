class Tamagotchi{
    constructor(hungerResistance, tiredResistance, bordomResistance){
        this.hungerResistance = hungerResistance || Math.floor((Math.random() * (.2 - .15 + .1) + .15)* 10) /10;
        this.tiredResistance = tiredResistance || Math.floor((Math.random() * (.3 - .2 + .1) + .2)* 10) /10;
        this.bordomResistance = bordomResistance ||  Math.floor((Math.random() * (.2 - .15 + .1) + .15)* 10) /10;
        this.hunger = 0;
        this.tiredness = 0;
        this.bordom = 0;
        this.age = 0;
    }
    //----------methods----------
    eat() {
        this.hunger -= 3;
        console.log('ate food');
    }
    sleep() {
        this.tiredness -= 2;
        console.log('took a nap');
    }
    play() {
        this.bordom -= 3;
        console.log('played with toys');
    }
};


//---------------Universal stuff---------------
let time = 0;
let name = ''
const pet = new Tamagotchi();




//------------------------------------functions--------------------------------
function updateAge() {
    const ageStatus = findElement('.age');
    pet.age += 1;
    ageStatus.innerText = `${name} age: ${pet.age}`;
    changeImage();
};

function updateStats() {
    if (Math.random() > pet.bordomResistance){
        pet.bordom += 1;
        boredElement.innerText = `Bored: ${pet.bordom}`;
    }
    
    if (Math.random() > pet.tiredResistance){
        pet.tiredness += 1;
        tiredElement.innerText = `Tired: ${pet.tiredness}`;
    }
    
    if (Math.random() > pet.hungerResistance){
        pet.hunger += 1;
        hungryElement.innerText = `Hungry: ${pet.hunger}`;
    }
    endGame();
    die();
};

function startTimer(){
    const timer = setInterval(function (){
        if (time < 60){
            time++;
            console.log(time);
            if (time % 1 === 0){
                updateStats();
            }else if(time % 7 === 0){
                updateAge();
            }
        }else {
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

function getInputValue(){
    // Selecting the input element and get its value 
    name = document.getElementById("input").value;
    // Displaying the value
        // alert(inputVal);
};

function changeImage (){  
    if ( pet.age === 2){
        image.style.backgroundImage = "url(./assets/L2.JPG)";
    }else if ( pet.age === 3){
        image.style.backgroundImage = "url(./assets/L3.JPG)";
    }else if ( pet.age === 4){
        image.style.backgroundImage = "url(./assets/L4.JPG)";
    }else if ( pet.age === 5){
        image.style.backgroundImage = "url(./assets/L5.JPG)";
    }
    //SHOUT OUT TO MELISA FOR HELPING WITH THIS MONSTER!
};

function endGame (){  
    if ( pet.age === 6 ){
        image.style.backgroundImage = "url('./assets/Win.jpg')";
        image.innerText = `Congratulations ${name} Survived!`;
        time = 61
    } 
};

function die (){
    if ( pet.hunger === 11 || pet.tiredness === 11 || pet.bordom === 11){
        image.style.backgroundImage = "url('./assets/RIP.jpg')";
        image.innerText = `R.I.P ${name}`;
        time = 61
    }
};

// ----------------------------------DOM Elements-------------------------------
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

// console.log(image);

// ----------------------------------handle functions-----------------------------
function handleYesButton(){
    console.log('YES');
    // removeIntro();
    // displayGame();
    alert('Yes!');
};

function handleNoButton(){
    console.log('No!!!');
    removeIntro();
    alert('no');
};

function handleFeedButton(){
pet.eat();
updateStats();
};

function handleSleepButton(){
pet.sleep();
updateStats();
};

function handlePlayButton(){
pet.play();
updateStats();
};

function handleStartGameButton(){
    startTimer();
    alert('ready?');
    getInputValue();
    updateAge();
};



//----------------------------------event listeners-------------------------------------

// yes.addEventListener('click', handleYesButton);
// no.addEventListener('click', handleNoButton);
feed.addEventListener('click', handleFeedButton);
sleep.addEventListener('click', handleSleepButton);
play.addEventListener('click', handlePlayButton);
startGame.addEventListener('click', handleStartGameButton)



//---------------------------------Jimmy Query-----------------------------

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