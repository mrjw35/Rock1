//function to return a randomly return rock paper scissors

//var uscore=0, cscore=0 ,draw=0;

function round(player,computer){
    
     
    var player =  prompt("Enter rock, paper or scissors: ").toUpperCase();
    
if(player=="ROCK"||player=="PAPER"||player=="SCISSORS"){
    var computer = (Math.floor(Math.random() * 3));
    if(computer === 0){
        computer = "ROCK";
        //alert(computer);
      }
        else if(computer === 1)
        {
          computer = "PAPER";
        }
    else
    {
        computer = "SCISSORS";
    }
    if(player === computer)
    {
        console.log(player,computer);
        return document.write("Draw");
    }
    else if(player === "ROCK" && computer === "PAPER" || player === "PAPER" && computer === "SCISSORS"
    ||player==="SCISSORS" && computer==="ROCK")
    {
        //alert( "computer wins");
        //cscore++;  
        console.log(player,computer);
        return document.write("you lose "+computer+ " beats "+player);
    }
    else
    {
        //alert("you win");
        //uscore++;
        console.log(player,computer);
        return document.write("you win "+player+ " beats "+computer);       
    }
}
else{
    alert("only rock paper or scissors")
return player;

}

}

