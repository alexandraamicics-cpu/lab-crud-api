const db = require("../config/db");

// Create
exports.createCourse = (req, res) => {
  const { code, title, units } = req.body;
  if (!code || !title || !units) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.query(
    "INSERT INTO courses (code, title, units) VALUES (?, ?, ?)",
    [code, title, units],
    (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ error: "Course code already exists" });
        }
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: "Course created", courseId: result.insertId });
    }
  );
};

// Read all
exports.getAllCourses = (req, res) => {
  db.query("SELECT * FROM courses", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Read one
exports.getCourseById = (req, res) => {
  db.query("SELECT * FROM courses WHERE id = ?", [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: "Course not found" });
    res.json(results[0]);
  });
};

// Update
exports.updateCourse = (req, res) => {
  const { title, units } = req.body;
  db.query(
    "UPDATE courses SET title = ?, units = ? WHERE id = ?",
    [title, units, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ error: "Course not found" });
      res.json({ message: "Course updated" });
    }
  );
};

// Delete
exports.deleteCourse = (req, res) => {
  db.query("DELETE FROM courses WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted" });
  });
};
