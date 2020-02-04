
class Gem {

    //static sprites = ["Gem Blue.png" ,"Gem Green.png" , "Gem Orange.png"];
    //static yLocations = [160, 240, 330];
    constructor(){

        let any = parseInt(Math.random() * Gem.sprites.length)
        this.sprite = 'images/' + Gem.sprites[any];
      

        this.x = 50 + (Math.random() * 5) * 80;
        let anyy = parseInt(Math.random() * Gem.yLocations.length);
                                   
        this.y = Gem.yLocations[anyy];


    }

    
    update(){

    }
    render(){
        ctx.save(); // save and restore first then scale
        ctx.translate(this.x, this.y);
        ctx.scale(0.6 , 0.6);
        ctx.drawImage(Resources.get(this.sprite), -50, -100);
   

                // this code for drawing the cricle
  
         // ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
         // ctx.beginPath();
        //  ctx.arc(0, 0, 35, 0, 2*Math.PI);
        // ctx.fill();
         ctx.restore();
    }
}
Gem.sprites = ["Gem Blue.png" ,"Gem Green.png" , "Gem Orange.png"];
Gem.yLocations = [160, 240, 330];