// const express = require("express");
// const path = require("path");

// const app = express();
// const PORT = 3000;


// // serve static files from /public
// app.use(express.static(path.join(__dirname, "public")));


// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/pages/index.html"));
// });

// app.get("/archive", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/pages/archive.html"));
// });

// app.listen(PORT, () => {
//   console.log(`SYSTEM RUNNING at http://localhost:${PORT}`);
// });





const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

app.get('/archive', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/archive.html'));
});

app.get('/render', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/render.html'));
});

// START SERVER
app.listen(PORT, () => {
  console.log(`SYSTEM RUNNING at http://localhost:${PORT}`);
});



// stamp's logic
// app.get("/stamps", (req, res) => {
//   const dir = path.join(__dirname, "public/assets/images/stamps");
//   const files = fs.readdirSync(dir);
//   res.json(files);
// });



// endpoint to list stamp files
app.get("/stamps", (req, res) => {
  const stampDir = path.join(__dirname, "public/assets/images/stamps");

  fs.readdir(stampDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to load stamps" });
    }

    const images = files.filter(file =>
      /\.(png|gif|jpg|jpeg)$/i.test(file)
    );

    res.json(images);
  });
});


