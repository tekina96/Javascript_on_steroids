// challenge 1: your age in days

function ageindays() {
    var birthyear = prompt('what year were you born pal?');
    var ageindayss = (2021 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('You are ' + ageindayss + ' days old.');
    h1.setAttribute('id' , 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageindays').remove();
}



// challenge 2: cat generator

function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src= "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}


// challenge 3: rock , paper , scissors

function rpsgame(yourchoice) {
    console.log(yourchoice);

    var humanchoice , botchoice;
    humanchoice = yourchoice.id;
 
    botchoice = numtochoice(randtorpsint());
    console.log('computer choice:', botchoice);
  
    results = decidewinner(humanchoice,botchoice); // [1,0] means human won | bot lost
    console.log(results);
  
    message = finalmessage(results); // { 'message': 'you won/lost/tied', 'color': 'green/red/yellow'}
    console.log(message);
  
    rpsfrontend(yourchoice.id, botchoice, message);
    
}

function randtorpsint() {
    return Math.floor(Math.random() * 3);
}

function numtochoice(number) {
    return ['rock','paper','scissors'][number];
}

function decidewinner(yourchoice,computerchoice) {
    var rpsdatabase = {
        'rock': {'scissors': 1,'rock': 0.5,'paper': 0},
        'paper': {'rock': 1,'paper': 0.5,'scissors': 0},
        'scissors': {'paper': 1,'scissors': 0.5,'rock': 0},
    };
    var yourscore = rpsdatabase[yourchoice][computerchoice];
    var computerscore = rpsdatabase[computerchoice][yourchoice];

    return [yourscore, computerscore];
}

function finalmessage([yourscore, computerscore]) {
    if (yourscore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourscore === 0.5) {
        return {'message': 'You Tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsfrontend(humanimagechoice, botimagechoice, finalmessage) {
    var imagesdatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    // lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imagesdatabase[humanimagechoice] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messagediv.innerHTML = "<h1 style = 'color: " + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src='" + imagesdatabase[botimagechoice] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px rgba(237, 40, 33, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);

}

// challenge 4: change the button colors

var all_buttons = document.getElementsByTagName('button');

var copy_all_buttons = [];
for (let i=0; i< all_buttons.length; i++) {
    copy_all_buttons.push(all_buttons[i].classList[1]);
}

console.log(buttonthingy.value);

function buttoncolorchange(buttonthingy) {
    if (buttonthingy.value === 'red') {
        buttonred();
    } else if (buttonthingy.value === 'green') {
        buttongreen();
    } else if (buttonthingy.value === 'reset') {
        buttonreset();
    } else if (buttonthingy.value === 'random') {
        randomcolors();
    }
}

function buttonred()  {
    for (let i=0; i< all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttongreen()  {
    for (let i=0; i< all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonreset()  {
    for (let i=0; i< all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_all_buttons[i]);
    }
}

function randomcolors() {
    var choices = ['btn-primary' , 'btn-danger' , 'btn-success' , 'btn-warning'];

    for (let i=0; i< all_buttons.length; i++) {
        let randomnumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomnumbers]);
    }
}

