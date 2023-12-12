class Boton {
  
  constructor(bx, by, ancho, alto) {
    this.bx = bx;
    this.by = by;
    this.ancho = 180;
    this.alto = 50;
    textAlign(CENTER, CENTER);
    textSize(this.alto/3);
  }
  dibujarBoton(actual, prox, texto) { // --- DIBUJA EL BOTON ---
    this.actual = actual;
    this.prox = prox;
    this.texto = texto;
    fill(247,205,243);
    noStroke();
    rect(this.bx, this.by, this.ancho, this.alto);
    fill(0); 
    text(this.texto, this.bx+this.ancho/2, this.by+this.alto/2);
  }
  
   botonPresionado(bx, by, ancho, alto) { // para saber si se presiono el boton
    return mouseX>this.bx && mouseX<this.bx+this.ancho && mouseY>this.by && mouseY<this.by+this.alto;
  }
}
