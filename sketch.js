]var bat, object1, object2, home;
var batImage;

function preload(){
    batImage = loadImage("batImg.png");
    cloudImage = loadImage("cloud.png");
}

function setup(){

    createCanvas(600,400);
    cloud=createSprite(20,20);
    cloud.addImage("cloud",cloudImage);

    cloud=createSprite(150,20);
    cloud.addImage("cloud",cloudImage);

    cloud=createSprite(300,20);
    cloud.addImage("cloud",cloudImage);

    bat= createSprite(20,200);
    bat.addImage("bat",batImage);
    
    bat.scale = 0.2;
    bat.velocityX = 3;
    bat.debug="true";

    bat.setCollider("circle",0,0,200);

    object1 = createSprite(300,50,5,100);
    object1.shapeColor = 'yellow';
    object2 = createSprite(350,350,5,100);
    object2.shapeColor = 'red';
    home = createSprite(575, 200, 80,80);
    home.shapeColor = 'green';

    edge= createEdgeSprites();

    object1.velocityY = 2;
    object2.velocityY = -2;
}


function draw(){
    background(180);
    if(bat.isTouching(object1))
    {
        bat.velocityX=0;
    }
    if(bat.isTouching(object2))
    {
        bat.velocityX=0;
    }
    bat.bounceOff(edge);
    object1.bounceOff(edge);
    object2.bounceOff(edge);

    console.log(frameCount);
    drawSprites();
    
}
