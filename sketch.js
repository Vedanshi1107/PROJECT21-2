var canvas;
var music,square;
var greenbox,pinkbox,redbox,bluebox;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     greenbox = createSprite(700,590,190,40);
     greenbox.shapeColor = "green";
     greenbox.velocityX = 0;

     pinkbox = createSprite(500,590,190,40);
     pinkbox.shapeColor = "pink";
     pinkbox.velocityX = 0;

     redbox = createSprite(300,590,190,40);
     redbox.shapeColor = "red";
     redbox.velocityX = 0;

     bluebox = createSprite(100,590,190,40);
     bluebox.shapeColor = "blue";
     bluebox.velocityX = 0;


    //create box sprite and give velocity
    square = createSprite(random(20,750),200,50,50);
    square.shapeColor = color("white");
    square.velocityX = 3;
    square.velocityY = 3;


}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    
    edges = createEdgeSprites();
    square.bounceOff(edges);
     
    //add condition to check if box touching surface and make it box
    
    if(greenbox.isTouching(square) && square.bounceOff(greenbox)){
        square.shapeColor = "green"
    }

    if(pinkbox.isTouching(square) && square.bounceOff(pinkbox)){
        square.shapeColor = "pink"
    }

    if(redbox.isTouching(square) && square.bounceOff(redbox)){
        square.shapeColor = "red"
    }

    if(bluebox.isTouching(square) && square.bounceOff(bluebox)){
        square.shapeColor = "blue"
    }

    drawSprites();
}


