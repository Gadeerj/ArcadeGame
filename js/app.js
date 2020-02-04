let allEnemies = [];
let Gems =[];
//Gems.push(new Gem());
//Gems.push(new Gem());
//Gems.push(new Gem());
//Gems.push(new Gem());
let player = new Player();
let score = new Score();

// Enemies our player must avoid


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
function doEnemies() {
for(let y of[160, 240, 330]){
    let x = Math.random() * 200;
    allEnemies.push(new Enemy(100,y));
}}

function checkCollisions(){ // this function to check the collisions with enemey
    if(player.NOLives < 1) { return;}
    allEnemies.forEach(bug => {
        if(Math.abs(bug.x - player.x)< 50 && Math.abs(bug.y - player.y) < 50){
            player.collidedWithEnemey();
        }

    });
    Gems.forEach((gem, any) =>{
        if(Math.abs(gem.x - player.x)< 50 && Math.abs(gem.y - player.y) < 50){
            player.collidedWithGem();
            Gems.splice(any , 1); // to take off the element from the array
        }
    
    });
}
function makeGems(){ // this function to create the gems
    Gems = [];
    for (let i = 0; i < 4; i++){
        Gems.push(new Gem());
    }

}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down' ,
        13: 'enter'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
doEnemies();
makeGems();
