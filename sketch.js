var ang = 0;
var slider;
function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  slider = createSlider(0,PI, PI*2, 0.01)
}

function draw() {
  ang = slider.value();
  background(127);
  noStroke();
  fill(50);
  translate(0,0);
  textSize(32);
  text(ang * (2*180) / PI, 20,40)
  text(ang, 20,80)
  translate(width/2,height);
  //2×180°/π
  fill(255);
  stroke(255);
  branch(height/5);
}

function branch(len)
{
  line(0,0,0,-len);
  translate(0, -len)
  if(len > 4)
  {
    push();
    rotate(ang);
    branch(len * 0.67)
    pop();
    push();
    rotate(-ang);
    branch(len * 0.67)
    pop();  
  }
  
  
}