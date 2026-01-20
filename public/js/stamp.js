
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
    const res = await fetch("/api/stamps");
    const stamps = await res.json();

    stamps.forEach(name => {
      const img = document.createElement("img");
      img.src = `/assets/images/stamps/${name}`;
      img.className = "stamp";
      layer.appendChild(img);
    });

  } catch (err) {
    console.error("stamp load failed", err);
  }
});

