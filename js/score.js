class Score{
    constructor(){
        this.startAgain();
    }
    startAgain(){
        this.GScore = 0;
    }

    render(){
  ctx.font = "30px Arial";
  ctx.fillText(`Noumber Of Lives: ${player.NOLives}` , 10,30);
  ctx.fillText(`Score: ${this.GScore}` , 330 , 30)
  if(player.NOLives < 1){
      player.gameEnd();
      this.userPlayAgain();
  }
      if(Gems.length == 0){
          player.PlayerWin();
          this.userPlayAgain();
          this.AllScore();
        
      }
  }


    
  userPlayAgain(){
  
    ctx.fillText("Game End, Press Enter to play agian" , 10,500);


  }
  increaseScore(){
      this.GScore +=10;

  }
  AllScore(){
    ctx.fillText("Congradulations!" , 100,300);
   
  }

}