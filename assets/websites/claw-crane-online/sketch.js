function preload(){
}
var dolls= [];
var mydoll=[];
var grayDoll;
var redDoll;
var gameover=false;
var img;
var img2;
var img3;
var catWidth=50;
var catHeight=62;
var bouncyCatRatio=5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("graydoll.png");
  img2 = loadImage("hook.png")
  img3 = loadImage("reddoll.png")
  imageMode(CENTER);

//定义红娃娃数量
var myDollNumber = 55;
for(var m =0;m<myDollNumber;m++){
  var redDoll = new myDoll(random(width-300,width-100),random(height),random(0,100));
redDoll.speed = random(-2, 2);
mydoll.push(redDoll);
}

  //定义灰娃娃的数量
  var dollNumber= 500;
  for (var i=0; i<dollNumber; i++) {
    //myCat为功能Cat新建命令，位置随机放置，大小为10
    var grayDoll = new Doll(random(1500, width), random(0, height), random(0,100));
    grayDoll.speed=random(0.1, 0.8);
    grayDoll.stroke=noStroke();
    grayDoll.color=color(61, 69, 119, 140);
    dolls.push(grayDoll);
    }
}
function draw() {
//如果游戏没结束
 if(!gameover){
    var myMouseX=mouseX;
    var myMouseY=mouseY;
    var myMouseBody=100;
    var myMoyseRad=25;
    background(218, 215, 208);
    textFont('Bitter');
    textAlign(CENTER);
    fill('red');
    textSize(100);
    text('CATCH YOUR RED DOLL', width/2-300, 150);
    textSize(45);
    fill('GRAY');
    text('WATCH OUT,DO NOT CATCH GRAY DOLLS', width/2-280, 250);
    for (var j=0; j<dolls.length; j++) {
      if(j%bouncyCatRatio==0){
        dolls[j].randomMove();
      }else{
        dolls[j].move();
      }
      dolls[j].display();
      dolls[j].diameter += 0.01;
      dolls[j].speed += 0.002;
      var xOffset=abs(dolls[j].x-myMouseX);
      var yOffset=abs(dolls[j].y-myMouseY);
      //如果碰到就输了
      if((xOffset<=(myMouseBody/2+catWidth/2))&&(yOffset<=(myMouseBody/2+catHeight/2))) {
        textFont('Bitter');
        textAlign(CENTER);
        fill('red');
        textSize(75);
        push();
        rectMode(CENTER);
        fill('yellowgreen');
        stroke('white');
        strokeWeight(10);
        rect(width/10,height/2-25,950,200);
        pop();
        text('Click here to restart', width/10, height/2);
        textSize(80);
        text('YOU LOSE', width/2, height/2);
        gameover=true;
      }
    }
      for(var n=0;n<mydoll.length;n++){
  mydoll[n].randomMove();
  mydoll[n].show();
  var xxOffset=abs(mydoll[n].x-myMouseX);
  var yyOffset=abs(mydoll[n].y-myMouseY);
  //如果碰到就输了
  if((xxOffset<=(myMouseBody/2+catWidth/2))&&(yyOffset<=(myMouseBody/2+catHeight/2))) {

    textFont('Bitter');
    fill('red');
    textSize(100);
    textAlign(CENTER);
    text('YOU WIN', width/2, height/2);
    push();
    rectMode(CENTER);
    fill('yellowgreen');
    stroke('white');
    strokeWeight(10);
    rect(width/8,height/2-25,950,200);
    pop();
      textSize(75);
    text('Click here to restart', width/8, height/2);

    gameover=true;
  }
}
  }
      image(img2, myMouseX, myMouseY,180,140);
}

function myDoll(dollx,dolly,dollDiameter){
  this.x = dollx;
  this.y = dolly;
  this.diameter = dollDiameter;
  this.speed = 0.1;
  var rDir = 1;
  var rDir = 1;
  this.show = function(){
    image(img3, this.x, this.y,100,110);
  }
  this.randomMove=function() {

      this.x += this.speed * rDir;
      this.y += this.speed * rDir;
      if(this.y>height || this.y<0) {
        rDir=rDir * -1;
      }
      if(this.x>width || this.x<0){
        rDir=rDir * -1;
      }
  }
}
function Doll(bodyX, bodyY, bodyDiameter) {
  this.x = bodyX;
  this.y = bodyY;
  this.diameter = bodyDiameter;
  this.speed = 0.05;
  var yDir = 1;
  var xDir = 1;
this.randomMove=function() {

    this.x += this.speed * xDir;
    this.y += this.speed * yDir;
    if(this.y>height || this.y<0) {
      yDir=yDir * -1;
    }
    if(this.x>width || this.x<0){
      xDir=xDir * -1;
    }
}

  this.move = function() {

    var deadZone = 10;
    var moveX = 0;
    var moveY = 0;
    var towardsHyp;
    var towardsX;
    var towardsY;
    var pippo = 0.025;


    if(mouseY>this.y){

      if(mouseX>this.x){

        towardsHyp=sqrt(pow((mouseY - this.y), 2)+pow((mouseX - this.x), 2));

        towardsX=mouseX - this.x;
         if(towardsX >= deadZone){
          moveX=(this.speed*towardsHyp)/towardsX;
        }
        else {
          if(towardsX !=0){
            moveX=pippo;
          }
        }

        towardsY=mouseY - this.y;
        if(towardsY >= deadZone){
          moveY=(this.speed*towardsHyp)/towardsY;
        }else {
          if(towardsY !=0){
            moveY=pippo;
          }
        }

        this.x += moveX;
        this.y += moveY;

      }
      else {
        //bottom left
        towardsHyp=sqrt(pow((mouseY - this.y), 2)+pow((mouseX - this.x), 2));

        towardsX=this.x - mouseX;
        if(towardsX >= deadZone){
          moveX=(this.speed*towardsHyp)/towardsX;
        }else {
          if(towardsX !=0){
            moveX=pippo;
          }
        }

        towardsY=mouseY - this.y;
        if(towardsY >= deadZone){
          moveY=(this.speed*towardsHyp)/towardsY;
        }else {
          if(towardsY !=0){
            moveY=pippo;
          }
        }

        this.x -= moveX;
        this.y += moveY;


      }
    }
    else {
      if(mouseX>this.x){
        //top right
        towardsHyp=sqrt(pow((mouseY - this.y), 2)+pow((mouseX - this.x), 2));

        towardsX=mouseX - this.x;
        if(towardsX >= deadZone){
          moveX=(this.speed*towardsHyp)/towardsX;
        }else {
          if(towardsX !=0){
            moveX=pippo;
          }
        }

        towardsY= this.y - mouseY;
        if(towardsY >= deadZone){
          moveY=(this.speed*towardsHyp)/towardsY;
        }else {
          if(towardsY !=0){
            moveY=pippo;
          }
        }

        this.x += moveX;
        this.y -= moveY;

      }
      else {
        //top left
        towardsHyp=sqrt(pow((mouseY - this.y), 2)+pow((mouseX - this.x), 2));

        towardsX=this.x - mouseX;
        if(towardsX >= deadZone){
          moveX=(this.speed*towardsHyp)/towardsX;
        }else {
          if(towardsX !=0){
            moveX=pippo;
          }
        }

        towardsY=this.y - mouseY;
        if(towardsY >= deadZone){
          moveY=(this.speed*towardsHyp)/towardsY;
        }else {
          if(towardsY !=0){
            moveY=pippo;
          }
        }

        this.x -= moveX;
        this.y -= moveY;

      }
    }

  }

  this.display = function() {
    fill(this.color);
    image(img, this.x, this.y,100,110);
  }
}
function mouseClicked() {
  if(gameover){
   location.reload()}
}
