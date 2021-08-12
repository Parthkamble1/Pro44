var bg;
var spaceship;
var spaceshipImg;
function preload(){
bg = loadImage("images/bg2.png")
spaceshipImg = loadImage("images/spaceship1.png")

}
function setup(){
 createCanvas(displayWidth,displayHeight);
 spaceship = createSprite(750,600);
 spaceship.addImage(spaceshipImg)
 spaceship.scale = 0.4;
}

function draw(){
 
   background(bg);
    drawSprites();

}