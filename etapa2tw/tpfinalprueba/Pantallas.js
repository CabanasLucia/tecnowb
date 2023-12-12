class Pantallas {
  
  constructor (){
    this.load ();
  }
  
load (){
   this.imagenes = [];
    
   for (let i = 0; i < 15; i++) {
      this.imagenes[i] = loadImage("data/imagen"+i+".jpg");
   }
      
}
 
   dibujarPantalla(numero) {
    return this.imagenes[numero]; // --- DEVUELVE LA IMAGEN CORRESPONDIENTE AL NRO DE PANTALLA ---
  }
  
  
}
