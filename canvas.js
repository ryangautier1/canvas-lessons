let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context
let c = canvas.getContext("2d");

// c.fillStyle = 'rgba(255,0,0,0.1)';
// c.fillRect(100, 100, 100, 100);

// line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 200);
// c.strokeStyle = '#a3a3a3';
// c.stroke();

// arc

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    c.fill();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

let circleArray = [];
for (let i=0; i<100; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius*2) + radius;
  let y = Math.random() * (innerHeight - radius*2) + radius;
  
  let dx = (Math.random() - 0.5) * 4;
  let dy = (Math.random() - 0.5) * 4;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i=0; i<circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();

// for (let i=0; i<100; i++) {
//   c.beginPath();

//   c.arc(Math.random()*window.innerWidth,Math.random()*window.innerHeight, 30, 0, Math.PI*2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }