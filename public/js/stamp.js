
// fetch("/stamps")
//   .then(res => res.json())
//   .then(files => {
//     const random = files[Math.floor(Math.random() * files.length)];
//     const img = document.createElement("img");
//     img.src = `stamps/${random}`;
//     img.className = 'stamp';
//     document.
//   });

document.addEventListener("DOMContentLoaded", async () => {
  const layer = document.getElementById("stamp-layer");

  try {
    const res = await fetch("/stamps");
    const stamps = await res.json();

    stamps.forEach(name => {
      const img = document.createElement("img");
      img.src = `/stamps/${name}`;
      img.className = "stamp";
      layer.appendChild(img);
    });

  } catch (e) {
    console.error("stamp load failed", e);
  }
});
