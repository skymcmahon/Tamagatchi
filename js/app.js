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
console.log(billy);


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
}


//----------temp----------
startTimer()