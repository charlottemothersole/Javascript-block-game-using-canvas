console.log('Javascript is running!')

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//dimensions of black canvas
const width = 400;
const height = 400;

//position and dimensions of player square
let playerSquare = {
    left: 0,
    top: 0,
    shapeWidth: 50,
    shapeHeight: 50
}

//position and dimensions of obstacle
let obstacle = {
    left: 100,
    top: 0,
    obstacleWidth: 10,
    obstacleHeight:300
}

//playable space limits for shape
const maxWidth = width - playerSquare.shapeWidth;
const maxHeight = height - playerSquare.shapeHeight;

//default shape colour. Changes based on player choice
let shapeColour = 'green';

//draw player square
function drawPlayerSquare() {
    //ensure canvas is clear and any old shapes removed
    ctx.clearRect(0, 0, width, height);
    //my shape
    ctx.fillStyle = shapeColour;
    // (horizontal axis, vertical axis, width, height)
    ctx.fillRect(playerSquare.left, playerSquare.top, playerSquare.shapeWidth, playerSquare.shapeHeight);
}

function drawObstacle() {
    ctx.fillStyle = 'purple';
    ctx.fillRect(obstacle.left, obstacle.top, obstacle.obstacleWidth, obstacle.obstacleHeight);
}

drawPlayerSquare();
drawObstacle();

//this function changes the shape colour and is triggered from onclick event listener
// in the html file on the colour list options
function changeColour(colour) {
    shapeColour = colour;
    drawPlayerSquare();
}

//draws the winning screen
function drawWinScreen() {
    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = '48px serif';
    ctx.fillStyle = 'green';
    ctx.fillText('You win!', 10, 50);
}

//draws the losing screen
function drawLoseScreen() {
    //ensure canvas is clear and any old shapes removed
    ctx.clearRect(0, 0, 400, 400);
    ctx.font = '48px serif';
    ctx.fillStyle = 'red';
    ctx.fillText('You lose!!', 10, 50);
}



//when arrow key is pressed, shape moves in that direction
window.addEventListener('keydown' , (event) => {
    if(playerSquare.left >= obstacle.left - playerSquare.shapeWidth && playerSquare.top <= obstacle.top + obstacle.obstacleHeight) {
        console.log('playerSquare.left',playerSquare.left);
        console.log('obstacle.left - playerSquare.shapeWidth',obstacle.left - playerSquare.shapeWidth);
        console.log('playerSquare.top',playerSquare.top);
        console.log('obstacle.top + obstacle.obstacleHeight',obstacle.top + obstacle.obstacleHeight);
        drawLoseScreen();
    } //only allow movement if shape is within canvas dimensions
    else if(playerSquare.left < maxWidth) {
        // if(playerSquare.left >= obstacle.left - playerSquare.shapeWidth) {
        //     console.log('lose');
        //     drawLoseScreen();
        // } 
        // else 
        if(event.code === 'ArrowRight') {
            playerSquare.left += 10;
            drawPlayerSquare()
            drawObstacle();
            //if shape reaches end of canvas display win screen
            if(playerSquare.left >= width - playerSquare.shapeWidth) {
                console.log(playerSquare.left);        
                drawWinScreen();
            }
        }
    }    
    if(playerSquare.left >= obstacle.left - playerSquare.shapeWidth && playerSquare.top <= obstacle.top + obstacle.obstacleHeight) {
        console.log('playerSquare.left',playerSquare.left);
        console.log('obstacle.left - playerSquare.shapeWidth',obstacle.left - playerSquare.shapeWidth);
        console.log('playerSquare.top',playerSquare.top);
        console.log('obstacle.top + obstacle.obstacleHeight',obstacle.top + obstacle.obstacleHeight);
        drawLoseScreen();
    } else if (event.code === 'ArrowLeft') {        
        playerSquare.left -= 10;
        drawPlayerSquare()
        drawObstacle();
    }        
    if(playerSquare.left >= obstacle.left - playerSquare.shapeWidth && playerSquare.top <= obstacle.top + obstacle.obstacleHeight) {
        console.log('playerSquare.left',playerSquare.left);
        console.log('obstacle.left - playerSquare.shapeWidth',obstacle.left - playerSquare.shapeWidth);
        console.log('playerSquare.top',playerSquare.top);
        console.log('obstacle.top + obstacle.obstacleHeight',obstacle.top + obstacle.obstacleHeight);
        drawLoseScreen();
    } else if (event.code === 'ArrowDown') {
        playerSquare.top += 10;
        drawPlayerSquare()
        drawObstacle();
    }
    if(playerSquare.left >= obstacle.left - playerSquare.shapeWidth 
        && playerSquare.top <= obstacle.top + obstacle.obstacleHeight
        // add if ps.top > ob.top + ob.height = LOSE
            // add if ps.left >= ob.width = OK

        //move this to separate if condition
        || playerSquare.left <= obstacle.left + obstacle.obstacleWidth
        && playerSquare.left >= obstacle.left
        && playerSquare.top <= obstacle.top) { 
            console.log('here!-------------------------------')
            console.log(playerSquare.left >= obstacle.left - playerSquare.shapeWidth )
            console.log(playerSquare.top <= obstacle.top + obstacle.obstacleHeight)
            console.log('or' )
            console.log(playerSquare.left <= obstacle.left + obstacle.obstacleWidth )
            console.log(playerSquare.left >= obstacle.left )
            console.log(playerSquare.top <= obstacle.top )
        //lose
        if(playerSquare.top > obstacle.top + obstacle.obstacleHeight) {
            //unless this
            
            if(playerSquare.left >= obstacle.obstacleWidth) {
                //then ok to continue
                
                if (event.code === 'ArrowUp') {
                    playerSquare.top -= 10;
                    drawPlayerSquare()
                    drawObstacle();
                }  
            }
        }
        else {
            console.log('playerSquare.left',playerSquare.left);
            console.log('playerSquare.left + playerSquare.shapeWidth',playerSquare.left + playerSquare.shapeWidth);
            console.log('obstacle.left',obstacle.left);
            console.log('obstacle.left + obstacle.obstacleWidth',obstacle.left + obstacle.obstacleWidth);
            console.log('obstacle.left - playerSquare.shapeWidth',obstacle.left - playerSquare.shapeWidth);
            console.log('playerSquare.top',playerSquare.top);
            console.log('playerSquare.top + playerSquare.shapeHeight',playerSquare.top + playerSquare.shapeHeight);
            console.log('obstacle.top + obstacle.obstacleHeight',obstacle.top + obstacle.obstacleHeight);
            console.log('obstacle.top',obstacle.top);
            drawLoseScreen();
        }
    } else if (event.code === 'ArrowUp') {
        playerSquare.top -= 10;
        drawPlayerSquare()
        drawObstacle();
    }  
})