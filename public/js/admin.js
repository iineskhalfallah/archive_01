const page = "archive";

function load() {
  fetch(`/api/content/${page}`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";
      data.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.body}
          <button onclick="del(${item.id})">X</button>
        `;
        list.appendChild(li);
      });
    });
}

load();
