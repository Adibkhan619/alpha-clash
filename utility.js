
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function play() {
    // hide everything, show only playground
    hideElementById('home');
    hideElementById('score')
    showElementById('play-ground');


    // reset life and score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('button pressed',playerPressed );

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet );

    // check matched or not----->
    if (playerPressed === expectedAlphabet){
        console.log('you got a point');

        // update score: ----------->
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // 2. increase the score by 1
        const newScore = currentScore + 1;

        // 3. show the updated score
        currentScoreElement.innerText = newScore;
        

        // start a new round----->
        continueGame();
        removeBackgroundColorById(expectedAlphabet);
    }
    else{
        console.log('you missed');
        // step-1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // step-2: reduce the life count

        const updatedLife = currentLife - 1;

        // step-3: display the updated life count
        currentLifeElement.innerText = updatedLife;

        if(updatedLife === 0){
       gameOver();

        }

    }
}

// capture keyboard keypress----->
document.addEventListener('keyup',handleKeyboardKeyUpEvent);


function continueGame() {

    // step 1: generate a random alphabet----->
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet:', alphabet);

    // set randomly generated alphabet to the screen(show it)----->
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;  
    
    //set background color of the alphabet
    setBackgroundColorById(alphabet);
    // removeBackgroundColorById(alphabet);

}


function getARandomAlphabet() {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function gameOver(){

    hideElementById('play-ground');
    showElementById('score');   

    // set updated score
    const lastScore = getTextElementValueById('current-score');
    console.log( 'last', lastScore);
    setTextElementValueById('final-score', lastScore);
    
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}