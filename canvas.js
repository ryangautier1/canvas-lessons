let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context
let c = canvas.getContext("2d");

c.fillStyle = 'rgba(255,0,0,0.1)';
c.fillRect(100, 100, 100, 100);

// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 200);
c.strokeStyle = '#a3a3a3';
c.stroke();

// arc
// c.beginPath();
// c.arc(300,300, 30, 0, Math.PI*2, false);
// c.strokeStyle = 'blue';
// c.stroke();

for (let i=0; i<1000; i++) {
  c.beginPath();

  c.arc(Math.random()*window.innerWidth,Math.random()*window.innerHeight, 5, 0, Math.PI*2, false);
  c.strokeStyle = 'blue';
  c.stroke();
}