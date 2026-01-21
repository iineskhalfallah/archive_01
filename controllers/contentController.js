const db = require("../db/db");

exports.getByPage = (req, res) => {
  const { page } = req.params;

  db.all(
    "SELECT * FROM content WHERE page = ? ORDER BY created_at DESC",
    [page],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    }
  );
};

exports.create = (req, res) => {
  const { page, body } = req.body;

  db.run(
    "INSERT INTO content (page, body) VALUES (?, ?)",
    [page, body],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
};

exports.delete = (req, res) => {
  db.run(
    "DELETE FROM content WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ success: true });
    }
  );
};
