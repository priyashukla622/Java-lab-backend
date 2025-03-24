import Course from "../Models/courseModel.js";

const getCourse = async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
};

// 📌 2. Get Course by ID
const getAll = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Error fetching course by ID", error });
  }
};

// ✅ Correct Export
export { getCourse, getAll };

