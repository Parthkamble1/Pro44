var bg;
var spaceship;
var spaceshipImg;
var astroied1,astroied2,astroied3;
var astroied1Img,astroied2Img,astroied3Img;
var astroied1Grup,astroied2Grup,astroied3Grup;
var bullet;
var bulletImg;
var bulletGrup;
function preload(){
bg = loadImage("images/bg2.png")
spaceshipImg = loadImage("images/spaceship1.png")
astroied1Img = loadImage("images/astroied.png")
astroied2Img = loadImage("images/astroied2.png")
astroied3Img = loadImage("images/astroied3.png")
bulletImg = loadImage("images/bullet.png")

}
function setup(){
 createCanvas(displayWidth,displayHeight);
 spaceship = createSprite(750,600);
 spaceship.addImage(spaceshipImg)
 spaceship.scale = 0.4;
 astroied1Grup = new Group();
 astroied2Grup = new Group();
 astroied3Grup = new Group();
 bulletGrup = new Group();
 

}

function draw(){
 
   background(bg);
 if(keyDown("left")){
spaceship.x = spaceship.x-3
 }
 if(keyDown("right")){
spaceship.x = spaceship.x+3
 }
 if((keyDown("space"))&&bulletGrup.isTouching(spaceship)===false){
firebullet();
 }
var rand=Math.round(random(1,3))
if(frameCount % 150 === 0){
if(rand===1){
    spawnAstroied1();
}
else if(rand===2){
    spawnAstroied2();
}
else {spawnAstroied3();}
}


drawSprites();

}
function spawnAstroied1(){
    astroied1 = createSprite(Math.round(random(0,displayWidth)),0);
    astroied1.addImage(astroied1Img)
    astroied1.scale = 0.3
    astroied1.velocityY = 2
    astroied1Grup.add(astroied1)
}
function spawnAstroied2(){
    astroied2 = createSprite(Math.round(random(0,displayWidth)),0);
    astroied2.addImage(astroied2Img)
    astroied2.scale = 0.2
    astroied2.velocityY = 2
    astroied2Grup.add(astroied2)
}
function spawnAstroied3(){
    astroied3 = createSprite(Math.round(random(0,displayWidth)),0);
    astroied3.addImage(astroied3Img)
    astroied3.scale = 0.3
    astroied3.velocityY = 2
    astroied3Grup.add(astroied3)
}
function firebullet(){
    bullet = createSprite(spaceship.x,600);
    bullet.addImage(bulletImg)
    bullet.scale = 0.1
    bullet.velocityY = -6
    bulletGrup.add(bullet)
}
