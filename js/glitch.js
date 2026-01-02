const text = document.querySelector(".logo");

setInterval(() => {
  text.style.opacity = Math.random() > 0.9 ? "0.2" : "1";
}, 120);
