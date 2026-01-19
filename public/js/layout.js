function syncSideHeights() {
  const frameImg = document.querySelector('.frame-img');
  const left = document.querySelector('.left-wing');
  const right = document.querySelector('.right-wing');

  if (!frameImg || !left || !right) return;

  const height = frameImg.getBoundingClientRect().height;

  left.style.height = `${height}px`;
  right.style.height = `${height}px`;
}

// wait for image to load
window.addEventListener('load', syncSideHeights);
window.addEventListener('resize', syncSideHeights);

