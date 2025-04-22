let x; let y;


function setup() {
  createCanvas(400, 400);
  x = random(400);
  y = random(400);
  
  x = int(x);
   y = int(y);


}


function draw() {
  background(220);
  circle(x, y, 10);
  
  let distanciaX = mouseX - x;
  let distanciaY = mouseY - y;
  let distancia;
  
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    
  
  console.log(distancia);
  
  if(mouseX == x && mouseY == y){
    text("encontrei", 200, 200);
    
  noLoop();
    
  
}
  
}