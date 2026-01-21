fetch("/api/content/archive")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("content-left");

    container.innerHTML = "";

    data.forEach(item => {
      const p = document.createElement("p");
      p.className = "archive-entry";
      p.innerHTML = item.body;
      container.appendChild(p);
    });
  })
  .catch(err => {
    console.error("Failed to load content", err);
  });
