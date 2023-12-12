class Auto {
  constructor(ax, ay, ancho, alto) {
    this.ax = ax;
    this.ay = ay;
    this.ancho = ancho;
    this.alto = alto;
    this.dx = random(1, 3); // --- PARA LA VELOCIDAD ---
    this.chocador = true;
    this.load ();
  }
  load (){
    this.autito = loadImage ('data/auto.png');
  }
  
  dibujarAuto() { // dibuja el auto
    image (this.autito, this.ax, this.ay, this.ancho+10, this.alto+10);
  }
  mover() { // mueve el auto
    this.ax += this.dx;
    if (this.ax>width) {
      this.ax = -this.ancho;
      this.chocador = true;
    }
  }
}
