const text = document.querySelector(".enter");

setInterval(() => {
  text.style.opacity = Math.random() > 0.9 ? "0.2" : "1";
}, 120);






const moths = document.querySelectorAll('.moth');

moths.forEach(moth => {
  function move() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = 3 + Math.random() * 5; // seconds
    moth.style.transition = `transform ${duration}s linear`;
    moth.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*360}deg)`;
    setTimeout(move, duration * 1000);
  }
  move();
});
