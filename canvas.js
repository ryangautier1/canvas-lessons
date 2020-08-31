let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context
let c = canvas.getContext("2d");

c.fillRect(100, 100, 100, 100)