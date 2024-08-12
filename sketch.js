BOLINHA QUE SEGUE O MOUSE E PISCA ✨💕
<p xmlns:cc="http://creativecommons.org/ns#" >This work is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>

let cor;
let vertical;
let horizontal;

function setup() {
  createCanvas(1000,800);
  background("blue");
  cor=color(random(0,255),random(0,255),random(0,255));
horizontal = 400; 
vertical = 500;
}

function draw() {
 circle(horizontal,vertical,100);
  fill(cor);
  
  if(mouseX < horizontal) {
    horizontal--   
}
  if(mouseX > horizontal) {
  horizontal++   
}
  if(mouseY < vertical) {
    vertical--    
} 
  if(mouseY > vertical){
    vertical++
  }
  if(mouseIsPressed){
cor=color(random(0,255),random(0,255),random(0,255));
}
}
