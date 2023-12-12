class Jugar {
  
  constructor() {
    this.estado = 0;
    this.per = new Personaje(width-100,520, 50, 100, 3);
    this.cars = [];
    for (let i=0; i<6; i++) {
      this.cars[i] = new Auto(0, 10+i*100, random(80, 100), random(40, 60));
    }
  }
  
  display() { // el juego en si mismo
    if (this.estado ==0){
    //background (200);
    for (let i=0; i<6; i++) {
      this.cars[i].dibujarAuto();
      this.cars[i].mover();
    }
    this.per.dibujar();
    this.arrollamiento();
    this.textoVida ();
    this.perder ();
    this.ganar ();
  }
 }
  
  arrollamiento() { // --- CONDICIÓN CHOQUE PARA PERDER VIDA ---
    for (let i=0; i<6 ; i++) {
      if (this.choque(this.cars[i].ax, this.cars[i].ay, this.cars[i].ancho, this.per.px, this.per.py, this.per.ancho, this.per.alto)&&this.cars[i].chocador) {
       background(200, 200, 0);
       this.cars[i].chocador = false;
       this.per.vidas ();
      }
    }
  }
  
  choque(x, y, autoAncho, px, py, pancho, alto) { // --- ME DEVUELVE LA CONDICIÓN PARA HACER PODER PERDER VIDA X ARROLLAMIENTO (POSICIÓN Y ANCHO DEL AUTO + POSICIÓN, ANCHO Y ALTO DEL PERSONAJE) ---
    return x+autoAncho>px && x<px+pancho && y+autoAncho/2>py && y<py+alto;
  }

  moverPersonaje(tecla) {
    this.tec = tecla;
    if (this.tec === UP_ARROW) {
      this.per.moverArriba();
    } else if (this.tec === DOWN_ARROW) {
      this.per.moverAbajo();
    } else if (this.tec === RIGHT_ARROW) {
        this.per.moverDer ();
    } else if (this.tec === LEFT_ARROW){
        this.per.moverIzq ();
    }
  }

  textoVida (){
    textSize (20);
    fill (0);
    text ("vidas: " + this.per.vida, 80,30); 
  }
  perder (){
    if (this.per.vida <= 0 ){
      this.estado = 7;
    }
  }
  
ganar (){
  if (this.per.py <= 0){
    this.estado = 8;
  }
}

getEstado(){
  return this.estado;
  }
  
  reiniciar () {
   this.estado = 0 ;
   this.per.vida = 3;
   this.per.dibujar ();
   this.per.px = width-100;
   this.per.py = 520;
  }
}
