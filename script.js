
let playerName1;
function hideStep1(){
    document.querySelector('.play-game').classList.add('hide');
    document.querySelector('.form1').classList.remove('hide');
}

function hidestep2() {
    document.querySelector('.sections').classList.remove('hide');
    document.querySelector('.form1').classList.add('hide');
    const playerName = document.querySelector('.name-entry').value;
    document.querySelector('.playerHolder').textContent = `${playerName}`;
    playerName1 = playerName;
    document.querySelector('.cpu').textContent = `Computer's choice`;


}

let myScore = 0;
let cpuScore = 0;
function Stone()
{
    
    
    

    let randomNumber = Math.trunc((Math.random()*3)+1);
    let choice;
    if(randomNumber==1){choice = 'Stone'}
    if(randomNumber==2){choice = 'Paper'}
    if(randomNumber==3){choice = 'Scissors'}
    document.querySelector('.cpu').textContent = `Computer's choice: ${choice}`;
    console.log(randomNumber);
    if(choice == "Stone"){
    }
    else if(choice == "Paper"){

        cpuScore++;
        document.querySelector('.cpuScore').textContent = cpuScore;
    }
    else if(choice == "Scissors"){
        myScore++;
        document.querySelector('.myScore').textContent = myScore;

    }

    if(myScore == 10)
    {
        document.querySelector('.title1').textContent = `${playerName1} Wins`;
        document.querySelector('.sections').classList.add('hide');

    }

    if(cpuScore==10)
    {
        document.querySelector('.title1').textContent = `Computer Wins`;
        document.querySelector('.sections').classList.add('hide');


    }

    
    
    


}

function Paper()
{
    
    
    

    let randomNumber = Math.trunc((Math.random()*3)+1);
    let choice;
    if(randomNumber==1){choice = 'Stone'}
    if(randomNumber==2){choice = 'Paper'}
    if(randomNumber==3){choice = 'Scissors'}
    document.querySelector('.cpu').textContent = `Computer's choice: ${choice}`;
    console.log(randomNumber);
    if(choice == "Stone"){
        myScore++;
        document.querySelector('.myScore').textContent = myScore;
    }
    else if(choice == "Paper"){

    }
    else if(choice == "Scissors"){
        cpuScore++;
        document.querySelector('.cpuScore').textContent = cpuScore;

    }

    if(myScore == 10)
    {
        document.querySelector('.title1').textContent = `${playerName1} Wins`;
        document.querySelector('.sections').classList.add('hide');

    }
    if(cpuScore==10)
    {
        document.querySelector('.title1').textContent = `Computer Wins`;
        document.querySelector('.sections').classList.add('hide');

    }
    
}

function Scissors()
{
    
    
    

    let randomNumber = Math.trunc((Math.random()*3)+1);
    let choice;
    if(randomNumber==1){choice = 'Stone'}
    if(randomNumber==2){choice = 'Paper'}
    if(randomNumber==3){choice = 'Scissors'}
    document.querySelector('.cpu').textContent = `Computer's choice: ${choice}`;
    console.log(randomNumber);
    if(choice == "Stone"){
        cpuScore++;
        document.querySelector('.cpuScore').textContent = cpuScore;
    }
    else if(choice == "Paper"){
        myScore++;
        document.querySelector('.myScore').textContent = myScore;



    }
    else if(choice == "Scissors"){
        
        

    }

    if(myScore == 10)
    {
        document.querySelector('.title1').textContent = `${playerName1} Wins`;
        document.querySelector('.sections').classList.add('hide');

    }
    if(cpuScore==10)
    {
        document.querySelector('.title1').textContent = `Computer Wins`;
        document.querySelector('.sections').classList.add('hide');


    }
    
}































