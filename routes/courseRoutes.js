const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// POST → Create course
router.post("/", courseController.createCourse);

// GET → All courses
router.get("/", courseController.getAllCourses);

// GET → One course by ID
router.get("/:id", courseController.getCourseById);

// PUT → Update course
router.put("/:id", courseController.updateCourse);

// DELETE → Remove course
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
