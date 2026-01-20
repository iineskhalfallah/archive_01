const text = document.querySelector(".enter");

setInterval(() => {
  text.style.opacity = Math.random() > 0.9 ? "0.2" : "1";
}, 120);


document.querySelectorAll('.sparkle').forEach(star => {
  setInterval(() => {
    star.style.opacity = Math.random() > 0.6 ? 1 : 0;
  }, 150 + Math.random() * 400);
});
