const wrappers = document.querySelectorAll('.moth-wrapper');

let mouseX = innerWidth / 2;
let mouseY = innerHeight / 2;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

wrappers.forEach(wrapper => {
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;

  function fly() {
    const speed = 2500 + Math.random() * 3000;

    let dx = (Math.random() - 0.5) * 400;
    let dy = (Math.random() - 0.5) * 400;

    // mouse avoidance
    const mx = x - mouseX;
    const my = y - mouseY;
    const dist = Math.hypot(mx, my);

    if (dist < 220) {
      dx += (mx / dist) * 300;
      dy += (my / dist) * 300;
    }

    x += dx;
    y += dy;

    const margin = 120;
    x = Math.max(margin, Math.min(innerWidth - margin, x));
    y = Math.max(margin, Math.min(innerHeight - margin, y));

    const rot = Math.random() * 40 - 20;

    wrapper.style.transition = `transform ${speed}ms linear`;
    wrapper.style.transform =
      `translate(${x}px, ${y}px) rotate(${rot}deg)`;

    setTimeout(fly, speed);
  }

  fly();
});
