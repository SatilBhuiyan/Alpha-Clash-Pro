function handlekeyboardkeyupEvent(event){
    const playerpress = event.key;
    
    const currentalphaelement =document.getElementById('current-alphabet');
    const currentalphabet =currentalphaelement.innerText;
    const alphabet = currentalphabet.toLowerCase();

    if(playerpress =="Escape"){
        gameover();
    }

    if(playerpress === alphabet){
        console.log("Get a point");
        const score = lifescore('current-score');
        const updatescore=score+1;
        lifescoreupdate('current-score',updatescore);
        removebuttoncolor(alphabet);
        continueGame();
    }
    else{
        console.log("loss a point");
        const life = lifescore('current-life');
        const updatelife = life-1;
        lifescoreupdate('current-life', updatelife);
        if(updatelife === 0)
        {
            gameover();
        }
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
    hideelementbyid('final-score');
    showelementbyid('play-screen');

    lifescoreupdate('current-life', 5);
    lifescoreupdate('current-score', 0);

    continueGame();
}

function gameover()
{
    hideelementbyid('play-screen');
    showelementbyid('final-score');

    const lastscore = lifescore('current-score');
    lifescoreupdate('game-score',lastscore);

    const alphabet=gettextelementbyid('current-alphabet')
    removebuttoncolor(alphabet);
}