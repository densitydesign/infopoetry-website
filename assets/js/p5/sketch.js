let angle = 0;
let angle2= 15; //rotazione quadrato
var x_off = 1000 ;
var y_off = 1000;
var z_off = 1000;
var vertices_amount = 150;
var NOISE_SCALE = 350;  // effetto smooth

var Z_SPEED = .01; // noise change per frame

var X_SPEED = .5; // cambiare per aumentare/diminuire blobbing
var Y_SPEED = .1; // cambiare per aumentare/diminuire blobbing


var color_x, color_speed = -0.05; //velocità con cui cambia il colore

var my_canvas = function(p){



  p.setup = function() {
  var canvas = p.createCanvas(p.windowWidth/2,p.windowHeight,p.WEBGL);
  p.colorMode(p.HSB, 100);
  color_x=100; //valore di partenza che decrementa di 0.1 al frame
  p.ellipseMode(p.RADIUS);
  console.log(color_x);
  canvas.parent('my-canvas');

}


p.draw = function(){
  p.background(100,0);
  //iniziano i parametri del blob
  //p.translate(p.width*0.25, 0);
  p.push();

  p.noStroke();
  p.fill(color_x, 100,100, 100);
  if(color_x < 0){
    color_x=100;
  } // allo zero, ricomincia il conteggio per fare loop coi colori



  let w = p.windowWidth;
  var radius = w/16; // raggio del blob
  var px_offset = w/9;    // quanto blobba
  var blob =  p.beginShape();//il blob con 120 vertici
  for (var a=0; a<p.TWO_PI;a+=p.TWO_PI/vertices_amount) {

    var x = radius*p.sin(a);
    var y = radius*p.cos(a);

    var new_x = x + ( p.noise(((x_off+x)/NOISE_SCALE),((y_off+y)/NOISE_SCALE), z_off) * px_offset * p.sin(a));

    var new_y = y + (p.noise(((x_off+x)/NOISE_SCALE),((y_off+y)/NOISE_SCALE), z_off) * px_offset * p.cos(a))
    p.vertex(new_x,new_y);
  }
  p.endShape();

  p.pop();

  // update il NOISE offsets
  z_off += Z_SPEED;
  x_off += X_SPEED;
  y_off += Y_SPEED;
  color_x += color_speed;

  p.push();
  // Cubo che gira
  p.stroke(0,0,0);
  p.strokeWeight(2);
  p.noFill();
  p.rotateY(angle+p.mouseX/200);
  p.rotateX(p.mouseY/200);
  p.box(w/5);
  angle += 0.005;
  p.pop();
  }
}
var sketch_1 =new p5(my_canvas);
