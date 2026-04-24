https://editor.p5js.org/matias.gutierrez5/sketches/Ds_5mqVdP


//let basicamente es jugar en creativo en minecraft
//si a let le doy el nombre q quiero se me hace más facil 
let corte = 0;
let nocorte = 0;
let posx=400
let posy=150
let sentidox = 1;
let sentidoy = 1;
let tamaño = 200
function setup() {
  createCanvas(800, 600);
colorMode(HSB,360,100,100)
frameRate(40)

}
//* es un por
function draw() {
posx = posx + 10 * sentidox;
posy = posy + 10 * sentidoy;

if (posx >width - tamaño/2){
sentidox = -1;
}


if (posx < 0 + tamaño/2){
sentidox = 1;
}

if (posy > height - tamaño/2){
sentidoy = -1;
}

if (posy < 0 + tamaño/2){
sentidoy = 1;
}


//porfavor no más if TT
//hice un nuevo fondo de pantalla

// El color complementario al del circulo
nocorte = corte + 180
  background(nocorte,100,100);

if (corte < 180){
nocorte = corte + 180
}


if (corte > 180){
nocorte = corte - 180
}
//teodiotranslate
translate(posx,posy);
fill(corte ,30,100)
ellipse(0,0, tamaño, tamaño)
corte = corte +1

if (corte>360){
corte= 0
}

textAlign(CENTER,CENTER)
fill(0,0,0)
textSize(20)
text ("Soy una pelota" + "\nque se mueve", 0,0);

}
