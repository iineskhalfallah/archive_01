const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let color = '#000';
let size = 5;

// mouse events
canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseleave', () => drawing = false);

canvas.addEventListener('mousemove', draw);

function draw(e) {
  if (!drawing) return;

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, size, 0, Math.PI * 2);
  ctx.fill();
}
