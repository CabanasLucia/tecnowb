class Personaje {
  constructor(px, py, ancho, alto,vida) {
    this.px = px;
    this.py = py;
    this.ancho = ancho;
    this.alto = alto;
    this.vida = vida;
    this.tocar = false;
    this.fondo = new Pantallas (); 
    this.load ();
    //this.personaje = loadImage ('data/personaje.png');
    
  }
  
  load (){
    this.personaje = loadImage ('data/personaje.png');
  }
  
  dibujar() {
    image(this.personaje,this.px,this.py, this.ancho,this.alto);
  }
  moverArriba() {
    this.py -= 20;
    
  }
  moverAbajo() {
    if (this.py < height-90){
    this.py += 20;
    }
  }
 
  moverIzq (){
    if (this.px > 0){
   this.px -=20;
    }
  }
   moverDer(){
     if (this.px < width-60){
   this.px +=20;
     }
  }
  vidas (){
    this.vida --; 
  }

}
