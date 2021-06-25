var n1;
var n2;

function setup() {
  createCanvas(800, 800);
  num1=createInput();
  num1.position(150,400)
  
  num2=createInput();
  num2.position(300,400);

  b1=createButton("Addition");
  b1.position(125,450);
  b1.mousePressed(add);

  b2=createButton("Subtract")
  b2.position(220,450)
  b2.mousePressed(sub);

  b3=createButton("Multiply")
  b3.position(315,450)
  b3.mousePressed(mul);
  
  b4=createButton("Divide")
  b4.position(410,450)
  b4.mousePressed(div);

}


function draw() {
  background("cyan");
  
  text("Number 1",150,380)
  text("Number 2",300,380)

  n1=parseInt(num1.value());
  n2=parseInt(num2.value());
}


function add() {
  console.log(n1 + n2)
}

function sub() {
  console.log(n1 - n2)
}

function mul() {
  console.log(n1 * n2)
}

function div() {
  console.log(n1 / n2)
}




















































































































































