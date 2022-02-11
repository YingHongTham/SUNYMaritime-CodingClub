const canvasElem = document.getElementById('mycanvas');
const ctx = canvasElem.getContext('2d');

function Ball(x,y,radius, c) {
  this.x = x;
  this.y = y;
  this.r = radius;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0.1;

  // c = context of canvas element
  this.ctx = c;
}

Ball.prototype.advanceTime = function() {
  this.x += this.vx;
  this.y += this.vy;
  this.vx += this.ax;
  this.vy += this.ay;

  if (this.y + this.r > canvasElem.height) {
    this.y = canvasElem.height - this.r;
    this.vy *= -1;
  }
};

// c = context of canvas element
Ball.prototype.draw = function() {
  const c = this.ctx;
  c.beginPath();
  c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  c.stroke();

  c.beginPath();
  c.moveTo(100,100);
  c.lineTo(200,200);
  c.stroke();
};

const b = new Ball(10,10,10,ctx);
console.log(b.x, b.y);

document.addEventListener('keydown', function(ev) {
  const key = ev.key;
  switch (key) {
    case "ArrowUp":
      b.vy -= 5;
      break;
    case "ArrowDown":
      b.vy += 1;
      break;
    case "ArrowLeft":
      b.vx -= 1;
      break;
    case "ArrowRight":
      b.vx += 1;
      break;
    default:
      return;
  }
});

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvasElem.width,canvasElem.height);
  b.advanceTime();
  b.draw();
};

animate();
