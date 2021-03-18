var canvas;
var music;
var po1,po2,po3,po4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
po1=createSprite(50,380,90,20);
po2=createSprite(150,380,90,20);
po3=createSprite(250,380,90,20);
po4=createSprite(350,380,90,20);


    //create box sprite and give velocity
box=createSprite(250,200,30,30);
box.velocityY=5;
box.velocityX=5;
}

function draw() {
    background(rgb(169,169,169));
    po1.shapeColor="yellow";
    po2.shapeColor="red";
    po3.shapeColor="pink";
    po4.shapeColor="blue";
    box.shapeColor="black";
    //create edgeSprite
    edges= createEdgeSprites();
    box.bounceOff(edges);
   box.bounceOff(po1);
   box.bounceOff(po2);
   box.bounceOff(po3);
   box.bounceOff(po4);
    


    //add condition to check if box touching surface and make it box

   
    if(isTouching(box,po1)){
        box.shapeColor="yellow";
        music.play();
      }

     else if(isTouching(box,po2)&& box.y >= 375){
        box.shapeColor="red";
        music.play();
      }
      
      else if(isTouching(box,po3)){
        box.shapeColor="pink";
        music.play();
      }
      
      else if(isTouching(box,po4)&& box.y >= 375){
        box.shapeColor="blue";
        music.play();
      }
      else{
     box.shapeColor="black"
      }
      
    drawSprites();
}

function isTouching(q1,q2){

    if(q1.x-q2.x<q1.width+q2.width
        &&q2.x-q1.x<q2.width+q1.width
        &&q1.y-q2.y<q1.height+q2.height
        &&q2.y-q1.y<q2.height+q1.height){
          
          return true;
        }
        else{
          return false;
        }
}
