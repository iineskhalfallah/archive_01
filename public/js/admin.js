const editor = document.getElementById("editor");
const saveBtn = document.getElementById("save");

// load existing text
fetch("/api/content")
  .then(res => res.json())
  .then(data => {
    editor.value = data.frameText || "";
  });

// save new text
saveBtn.onclick = () => {
  fetch("/api/content", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      frameText: editor.value
    })
  });
};
