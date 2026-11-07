function hideelementbyid(elementid)
{
    const element =document.getElementById(elementid);
    element.classList.add('hidden');
}


function showelementbyid(elementid)
{
    const element = document.getElementById(elementid);
    element.classList.remove('hidden');
}

function addbuttoncolor(elementid)
{
    const element = document.getElementById(elementid);
    element.classList.add('bg-orange-400');
}

function removebuttoncolor(elementid)
{
    const element = document.getElementById(elementid);
    element.classList.remove('bg-orange-400');
}

function getAlphabetRandomly()
{
    const alphabetstring ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split('');

    const randomnumber =Math.random()*25;
    const index = Math.round(randomnumber);
    
    const alphabet = alphabets[index];
    return alphabet;
}

function lifescore(elementid){
    const currentlifescoreelement = document.getElementById(elementid);
    const currentlifescoretext = currentlifescoreelement.innerText;
    const currentlifescore = parseInt(currentlifescoretext);

    return currentlifescore;
}

function scoreupdate(score){
    const newscore =score+1;

    const currentscoreelement = document.getElementById('current-score');
    currentscoreelement.innerText = newscore;
}

function lifeupdate(score){
    const newslife =score-1;

    const currentlifeelement = document.getElementById('current-life');
    currentlifeelement.innerText = newslife;
}