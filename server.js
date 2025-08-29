const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Direct route without controller (for testing)
app.post("/api/courses", (req, res) => {
  res.json({ message: "POST /api/courses works!", data: req.body });
});

app.get("/api/courses", (req, res) => {
  res.json([{ id: 1, code: "CS101", title: "Test Course", units: 3 }]);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
