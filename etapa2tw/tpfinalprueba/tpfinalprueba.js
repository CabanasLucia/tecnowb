// Cabañas Lucia
// tp final comision 1


let principal;

function setup() {
  createCanvas(600, 600);
  principal = new Principal();
 
  
}

function draw() {
  background(100);
  principal.dibujar();
}

function keyPressed() {
  
  principal.moverPersonaje();
 
}

function mousePressed() {
  principal.accionarBotones();
}
