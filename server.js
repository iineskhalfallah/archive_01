const express = require('express');
const fs= require("fs")
const path = require('path');

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// database init
require("./db/db");

// routes
app.use("/admin", require("./routes/admin"));
app.use("/content", require("./routes/content"));

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

app.get('/logs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/logs.html'));
});


app.get('/shrines', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/shrines.html'));
});

app.get('/links', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/links.html'));
});


// START SERVER
app.listen(PORT, () => {
  console.log(`SYSTEM RUNNING at http://localhost:${PORT}`);
});



// stamps logic
app.get("/api/stamps", (req, res) => {
  const dir = path.join(
    __dirname,
    "public/assets/images/stamps"
  );

  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return res.json([]);
    }

    const images = files.filter(f =>
      /\.(png|gif|jpg|jpeg)$/i.test(f)
    );

    res.json(images);
  });
});


// admin logic

// const contentPath = path.join(__dirname, "content.json");

// // read content
// app.get("/api/content", (req, res) => {
//   fs.readFile(contentPath, "utf8", (err, data) => {
//     if (err) return res.status(500).json({});
//     res.json(JSON.parse(data));
//   });
// });

// // update content
// app.post("/api/content", express.json(), (req, res) => {
//   const newContent = req.body;

//   fs.writeFile(
//     contentPath,
//     JSON.stringify(newContent, null, 2),
//     () => res.json({ status: "ok" })
//   );
// });
