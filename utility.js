
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}

function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();

}


function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    console.log(index);

    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;
}