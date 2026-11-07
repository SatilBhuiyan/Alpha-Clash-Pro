function handlekeyboardkeyupEvent(event){
    const playerpress = event.key;
    
    const currentalphaelement =document.getElementById('current-alphabet');
    const currentalphabet =currentalphaelement.innerText;
    const alphabet = currentalphabet.toLowerCase();

    if(playerpress === alphabet){
        console.log("Get a point");
        const score = lifescore('current-score');
        scoreupdate(score);
        removebuttoncolor(alphabet);
        continueGame();
    }
    else{
        console.log("loss a point");
        const life = lifescore('current-life');
        lifeupdate(life);
    }
}

document.addEventListener('keyup', handlekeyboardkeyupEvent);

function continueGame()
{
    const alphabet = getAlphabetRandomly();

    const randomalphabet= document.getElementById('current-alphabet');
    randomalphabet.innerText=alphabet;

    addbuttoncolor(alphabet);

}

function playnow(){
    hideelementbyid('home-screen');
    showelementbyid('play-screen');
    continueGame();
}