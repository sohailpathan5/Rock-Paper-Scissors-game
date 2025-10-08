let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScore1 = document.querySelector("#user-score");
const compScore1 = document.querySelector("#computer-score")



const genComputerChoice= () => {
    const options =["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =() =>{
    console.log("game was draw.");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31"
}
const showWinner=(userWin , userchoice, comchoice) =>{
        if(userWin){
            
            console.log("you win: ")
            userScore++;
            userScore1.innerText= userScore;
            msg.innerText = `You win ! Your ${userchoice} beats ${comchoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            console.log("you lose : ")
            compScore++;
            compScore1.innerText=compScore;
            msg.innerText = `You lose   ${comchoice} beats ${userchoice}`;
            msg.style.backgroundColor="red";
        }
}

const playGame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    const comchoice = genComputerChoice();
    console.log("computer choice = ",comchoice);

    if(userchoice===comchoice){
        // draw game
        drawGame();
    } else {
        let userWin= true;
        if(userchoice==="rock"){
            // comchoicce= "paper", "scissors"
            userWin= comchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
         // comchoice="rock" , "scissors"
            userWin=comchoice==="scissors"?false:true;
        }
        else{
            userWin= comchoice==="rock"?false:true;
        }
        showWinner(userWin , userchoice, comchoice);
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
    
        playGame(userchoice);
    });
});
