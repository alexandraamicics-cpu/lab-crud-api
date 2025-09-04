import db from "../config/db.js";

// CREATE
export const createCourse = (req, res) => {
    const { code, title, units } = req.body;

    if (!code || !title || !units) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO courses (code, title, units) VALUES (?, ?, ?)";
    db.query(sql, [code, title, units], (err, result) => {
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res.status(409).json({ error: "Course code must be unique" });
            }
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: "Course created successfully",
            data: { id: result.insertId, code, title, units }
        });
    });
};
