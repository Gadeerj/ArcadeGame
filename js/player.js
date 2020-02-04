class Player {
    constructor(){
        this.sprite = 'images/char-boy.png'; 
        this.NOLives = 3;
        this.startAgain();
    }
    startAgain(){ // this function is responsible to put the player in start position
    this.x = 50;
    this.y = 500;
    this.stopGame = false;
    this.winner = false;

    }
    update(){

    }
    gameEnd(){
        this.stopGame = true;
        this.winner = false;
    }
    PlayerWin(){
        this.stopGame = true;
        this.winner = true;

    }
    collidedWithEnemey(){
       //I used this to test the .. //console.log('player died');
       this.NOLives -=1;
       if(this.NOLives>0){
        this.startAgain();
       } 
    }
       collidedWithGem(){
      // console.log("have a Gem!");
      score.increaseScore(); // for increase the scores
       }
    render(){
        // this code for drawing the cricle
        ctx.drawImage(Resources.get(this.sprite), this.x-60, this.y-105);
       // ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
       // ctx.beginPath();
       // ctx.arc(this.x, this.y, 50, 0, 2*Math.PI);
       // ctx.fill();

    }
    handleInput(direction){ // for getting input
        if(this.stopGame) {
            if(direction == 'enter'){
                if(this.winner){
                    makeGems();
                    score.startAgain();
                }
                this.NOLives = 3;
                this.startAgain();
                makeGems();
                score.startAgain();
           

            } else{

                return;
            }
           
        }

        console.log(direction);
        switch(direction){
            case "right":
                if(this.x<400){ // these conditions to prevent the player to go out the canvas
                this.x += 100;
                }
            break;
            case "left":
                    if(this.x>50){
                this.x -=100;
            }
                break;
                case "up":
                        if(this.y>100){
                    this.y -=80;
                        }
                    break;
                    case "down":
                            if(this.y<500){
                        this.y +=80;
                            }
                    break;
                    default:
                        break;
                    
        }

    }

}