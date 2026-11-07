function playnow(){
    hideelementbyid('home-screen');
    showelementbyid('play-screen');
    continueGame();
}

function continueGame()
{
    const alphabet = getAlphabetRandomly();

    const randomalphabet= document.getElementById('current-alphabet');
    randomalphabet.innerText=alphabet;

    addbuttoncolor(alphabet);

}