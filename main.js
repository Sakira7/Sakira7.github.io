var square = document.getElementById("canvas");
var squareCtx = canvas.getContext("2d");
var snake = [  {x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200},];
var dx = 20;
var dy = 0; 
var changingDir = false;
var foodX;
var foodY;
var score = 0;
var move;
var paused = false;
var space = 32;

main();
genFood();
document.addEventListener("keydown", changeDir);
document.addEventListener("keydown", togglepause);

var highscoretext = document.createElement("h1");
var hs = document.createElement("p");
highscoretext.innerHTML= "Highscore:";
highscoretext.id = "highscoretext";
hs.id = "hs";
hs.innerHTML = localStorage.getItem("highscore");

var sidebar = document.getElementById("sidebar");

sidebar.appendChild(highscoretext);
sidebar.appendChild(hs);




function main(){
    if(hasGameEnded()){
        document.removeEventListener("keydown", togglepause);
        var input = document.createElement("input");
        var btn = document.createAttribute("type");
        var onClick = document.createAttribute("onclick");
        var value = document.createAttribute("value");
        onClick.value = "reload()";
        btn.value= "button";
        value.value = "Play again?"
        input.setAttributeNode(btn);
        input.setAttributeNode(onClick);
        input.setAttributeNode(value);
        input.id="button";
        square.style.animation="shake 0.3s";

        sidebar.appendChild(input);
        if(score != null){
        if(score > parseFloat(localStorage.getItem("highscore"))){
            localStorage.setItem("highscore", score);
            hs.innerHTML = localStorage.getItem("highscore");
        }}
        return
    }
    
    changingDir = false;
    move = setTimeout(function onTick(){clearCanvas(); drawFood(); moveSnake(); drawSnake();main();},100);
 
}
function togglepause(event){
    var pauseSymbol = document.getElementById("pauseSymbol");
    var keyPressed = event.keyCode;
    if(keyPressed === space && paused === false){
        window.clearTimeout(move);
        pauseSymbol.style.visibility="visible";
        paused = true;
    }else if(keyPressed === space && paused === true){
        setTimeout(function onTick(){clearCanvas(); drawFood(); moveSnake(); drawSnake();main();},100);
        pauseSymbol.style.visibility="hidden";
        paused = false;
    }
}

function drawSnakePart(snakePart){
    squareCtx.fillStyle = "white";
    squareCtx.strokeStyle = "black";
    squareCtx.lineWidth = 2.5;
    squareCtx.fillRect(snakePart.x, snakePart.y, 20, 20);
    squareCtx.strokeRect(snakePart.x, snakePart.y, 20, 20);
}
function clearCanvas() {
    squareCtx.fillStyle = "pink";
    squareCtx.strokestyle = "black";
    squareCtx.fillRect(0, 0, square.width, square.height);
    squareCtx.strokeRect(0, 0, square.width, square.height);
}
function drawSnake(){
    snake.forEach(drawSnakePart);
}
function randomFood(min, max){
    return Math.round((Math.random() * (max-min)+min)/20)*20;
}
function genFood(){
    foodX = randomFood(0, square.width - 20);
    foodY = randomFood(0, square.height - 20);
    snake.forEach(function hasSnakeEaten (part){
        var hasEaten = part.x == foodX && part.y == foodY;
        if(hasEaten)genFood();
    });
}
function drawFood(){
    squareCtx.fillStyle = "white";
    squareCtx.strokeStyle = "black";
    squareCtx.fillRect(foodX, foodY, 20, 20);
    squareCtx.strokeRect(foodX, foodY, 20, 20);
}
function moveSnake(){
    var head = {x: snake[0].x + dx, y:snake[0].y + dy};
    snake.unshift(head);
    var hasEaten = snake[0].x === foodX && snake[0].y === foodY;
    if (hasEaten){
        score += 10;
        document.getElementById('score').innerHTML = score;
        genFood();
    } else {
    snake.pop();}
}
function changeDir(event){
    var LEFT_KEY = 37;
    var UP_KEY = 38;
    var RIGHT_KEY = 39;
    var DOWN_KEY = 40;
    
    if (changingDir) return;
    changingDir = true;
    var keyPressed = event.keyCode;
    var goingUP = dy === -20;
    var goingDOWN = dy === 20;
    var goingLEFT = dx === -20;
    var goingRIGHT = dx === 20;
    
    if(keyPressed === LEFT_KEY && !goingRIGHT){
        dx = -20;
        dy = 0;
    }
    if(keyPressed === RIGHT_KEY && !goingLEFT){
        dx = 20;
        dy = 0;
    }
    if(keyPressed === UP_KEY && !goingDOWN){
        dx = 0;
        dy = -20;
    }
    if(keyPressed === DOWN_KEY && !goingUP){
        dx = 0;
        dy = 20;
    }
}
function hasGameEnded(){
    
    for(var i = 4; i < snake.length; i++){
        var hasCollided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
        if(hasCollided){
            return true;
        }
    }
    var hitLeftWall = snake[0].x < 0;
    var hitRightWall = snake[0].x > square.width -20;
    var hitTopWall = snake[0].y < 0;
    var hitBottomWall = snake[0].y > square.height -20;
    
    return hitLeftWall || hitRightWall || hitBottomWall || hitTopWall
    
}
function reload(){
    location.reload()
}




