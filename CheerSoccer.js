let mid;
let vol = 0;
let x = 0;
let z = 0;
let f1;
let ball;
let soccerball;
let y1;
let midnight;
let prog = 0;
let score = 0;


function setup() {
  createCanvas(1000, 1000);
  mic = new p5.AudioIn();
  mic.start();
  ball = loadImage("ball.png");
  soccerball = loadImage("soccerball.jpg");
  midnight = loadFont("midnight.ttf");
}

function draw() {
  background(220);
  background("#03A9F4");
  noStroke();
  fill("green");
  rect(0, 700, 1000, 300);
  fill("#724839");
  rect(600, 500, 50, 250);
  vol = mic.getLevel();
  prog = prog+(vol*100);
  image(ball, prog, 630, 150, 150);
  fill("#724839");
  rect(800, 500, 50, 300);
  fill("#A77766")
  rect(600, 500, 200, 50);
  fill("red")
  text(score, 100, 500);
  if(prog<800)
    {
  fill("black");
  textSize(42);
  textFont(midnight);
  text("Cheer on the soccer ball to reach the goal!", 50, 100);
    }
  else
    {
  fill("black");
  textSize(60);
  textFont(midnight);
  text("Goal!!!", 400, 100);
  textSize(42)
  text("Click to start again", 300, 300);
  
    }
}

function mouseReleased()
{
  prog=0;
  score++;
}
