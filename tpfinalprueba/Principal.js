class Principal {

  constructor() {
    this.pantalla = 0;
    this.fondo = new Pantallas ();
    this.j = new Jugar ();
    this.anchoBot = 120;
    this.altoBot = 60;
    this.bot1 = new Boton(200, 300, this.anchoBot, this.altoBot);
    this.bot2 = new Boton(200, 400, this.anchoBot, this.altoBot);
    this.bot3 = new Boton (400,500, this.anchoBot, this.altoBot);
    this.bot4 = new Boton (200,500,this.anchoBot, this.altoBot);
    this.bot5 = new Boton (50, 300, this.anchoBot, this.altoBot);
    this.bot6 = new Boton (50, 400, this.anchoBot, this.altoBot);
    this.bot7 = new Boton (200, 300, 400, this.altoBot);
    this.bot8 = new Boton (100, 500, this.anchoBot, this.altoBot);
    this.bot9 = new Boton (400, 525, this.anchoBot, this.altoBot);
    this.bot10 = new Boton(150, 400, this.anchoBot, this.altoBot);
    this.bot11 = new Boton(100, 500, this.anchoBot, this.altoBot);
    this.bot12 = new Boton (200, 500, this.anchoBot, this.altoBot); 
   
  }
  
    dibujar() {
    if (this.pantalla===0) {
      this.j.reiniciar ();
      background (this.fondo.dibujarPantalla (13)); //--- PORTADA ---
      this.bot1.dibujarBoton(0, 1, "INICIO");
      this.bot2.dibujarBoton (0, 2, "CREDITOS");
    } else if (this.pantalla ===1) {
      background (this.fondo.dibujarPantalla (1));
      this.bot4.dibujarBoton (1,3,"SIGUIENTE");
    } else if (this.pantalla === 2){
      background (this.fondo.dibujarPantalla (0));
       this.bot3.dibujarBoton(2, 0, "VOLVER");
    } else if (this.pantalla === 3){
      background (this.fondo.dibujarPantalla (2)); // --- BIFURCACIÓN ---
      this.bot5.dibujarBoton (3,4,"A");
      this.bot6.dibujarBoton (3,9, "B");
    } else if (this.pantalla === 4){
      background (this.fondo.dibujarPantalla (4)); // --- PANTALLA PRE JUEGO ---
      this.bot7.dibujarBoton (4,5, "JUGAR Y ESCAPAR");
      fill (255);
      textSize (13);
      text ("MOVETE CON LAS TECLAS Y LLEGA AL OTRO LADO SIN SER ATRAPADO, ¡SUERTE!", 300,500); // --- INSTRUCCIONES ---
    } else if (this.pantalla === 9){ // --- PARA EL OTRO FINAL CON JUEGO ---
      background (this.fondo.dibujarPantalla (6));
      this.bot1.dibujarBoton (9,10, "A");
      this.bot2.dibujarBoton (9,12, "B");
    } else if (this.pantalla === 5){
      background (200);
      this.j.display (); // --- JUEGO --- 
      if (this.j.getEstado() === 7){
       this.pantalla = 7;
      } else if  (this.j.getEstado() === 8){
       this.pantalla = 8;
    } 
    } else if (this.pantalla === 7){ // --- FINAL 1 ----
      background (this.fondo.dibujarPantalla (5));
      this.bot8.dibujarBoton (7,0,"VOLVER"); 
    } else if (this.pantalla === 8){
      background (this.fondo.dibujarPantalla (14)); // --- CAMINO DE GANAR ---
      this.bot9.dibujarBoton (8,9,"SIGUIENTE");
    } else if (this.pantalla ===10){
      background (this.fondo.dibujarPantalla (7)); 
      this.bot10.dibujarBoton (10,11,"SIGUIENTE");
    }else if (this.pantalla === 11){
      background (this.fondo.dibujarPantalla (8)); // --- FINAL 2 ---
      this.bot11.dibujarBoton (11,0,"VOLVER");
    } else if (this.pantalla === 12){ // --- BIFURCACIÓN ---
      background (this.fondo.dibujarPantalla (9)); 
      this.bot1.dibujarBoton (12,13,"A");
      this.bot2.dibujarBoton (12,14,"B");
    } else if (this.pantalla === 13){
      background (this.fondo.dibujarPantalla (10)); // --- FINAL 3 ---
      this.bot12.dibujarBoton (13,0,"VOLVER");
    } else if (this.pantalla === 14){
      background (this.fondo.dibujarPantalla (11)); 
      this.bot12.dibujarBoton (14,15,"SIGUIENTE");
    } else if (this.pantalla === 15){
      background (this.fondo.dibujarPantalla (12)); 
      this.bot12.dibujarBoton (15,0,"VOLVER"); // --- FINAL 4 ---
    } 
 }
  
  accionarBotones() {
    if (this.bot1.botonPresionado(200, 300, this.anchoBot, this.altoBot) && this.pantalla===this.bot1.actual) {
      this.pantalla = this.bot1.prox;
    }
     if (this.bot2.botonPresionado(200,400, this.anchoBot, this.altoBot) && this.pantalla===this.bot2.actual) {
     this.pantalla = this.bot2.prox;
    }
      if (this.bot3.botonPresionado(400,500, this.anchoBot, this.altoBot)&& this.pantalla===this.bot3.actual) {
      this.pantalla = this.bot3.prox;
    }
    if (this.bot4.botonPresionado(200, 500, this.anchoBot, this.altoBot) && this.pantalla===this.bot4.actual) {
      this.pantalla = this.bot4.prox;
    }
     if (this.bot5.botonPresionado(50, 300, this.anchoBot, this.altoBot) && this.pantalla===this.bot5.actual) {
      this.pantalla = this.bot5.prox;
    }
     if (this.bot6.botonPresionado(50, 400, this.anchoBot, this.altoBot) && this.pantalla===this.bot6.actual) {
      this.pantalla = this.bot6.prox;
    }
      if (this.bot7.botonPresionado(200, 300, 400, this.altoBot) && this.pantalla===this.bot7.actual) {
      this.pantalla = this.bot7.prox;
    }
    if (this.bot8.botonPresionado(100, 500, this.anchoBot, this.altoBot) && this.pantalla===this.bot8.actual) {
      this.pantalla = this.bot8.prox;
    }
    if (this.bot9.botonPresionado(400, 525, this.anchoBot, this.altoBot) && this.pantalla===this.bot9.actual) {
      this.pantalla = this.bot9.prox;
    }

    if (this.bot10.botonPresionado(150,400, this.anchoBot, this.altoBot) && this.pantalla===this.bot10.actual) {
     this.pantalla = this.bot10.prox;
    }
    if (this.bot11.botonPresionado(100,500, this.anchoBot, this.altoBot) && this.pantalla===this.bot11.actual) {
     this.pantalla = this.bot11.prox;
    }

    if (this.bot12.botonPresionado(200, 500, this.anchoBot, this.altoBot) && this.pantalla===this.bot12.actual) {
      this.pantalla = this.bot12.prox;
    }
   
}

moverPersonaje() {
    this.j.moverPersonaje(keyCode);
}

} 
