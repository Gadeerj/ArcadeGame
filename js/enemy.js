class Enemy  {
    

    constructor(x, y){
        this.sprite = 'images/enemy-bug.png'; 
        this.x = x;
        this.y = y;

       this.velocity = 150 + (Math.random() * 150);  // speed of enemys
    }
    update(delta){  
      this.x += this.velocity * delta;
      if(this.x > ctx.canvas.width + 50){
          this.x = -100;
      }
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x - 50, this.y - 100);
          // this code for drawing the cricle
  
          //ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          //ctx.beginPath();
          //ctx.arc(this.x, this.y, 50, 0, 2*Math.PI);
         // ctx.fill();
    }
};
