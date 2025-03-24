// import Course from "../models/courseModel.js"; 

// // 📌 Update Course by ID
// const updateCourse = async (req, res) => {
//   try {
//     const { id } = req.params; // ✅ Extract course ID from params
//     const updateData = req.body; // ✅ Data to update

//     // ✅ Check if the course exists
//     const existingCourse = await Course.findById(id);
//     if (!existingCourse) {
//       return res.status(404).json({ message: "Course not found" });
//     }

//     // ✅ Update the course
//     const updatedCourse = await Course.findByIdAndUpdate(id, updateData, { new: true });

//     res.status(200).json({ message: "Course updated successfully", updatedCourse });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating course", error });
//   }
// };
// export default updateCourse;





import Course from "../Models/courseModel.js";
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params; 
    console.log("Updating course with ID:", id);

    const updateData = req.body; // ✅ Data to update
    console.log("Update Data:", updateData);

    // ✅ Check if the course exists
    const existingCourse = await Course.findById(id);
    if (!existingCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    // ✅ Update the course
    const updatedCourse = await Course.findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: "Course updated successfully", updatedCourse });
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ message: "Error updating course", error: error.message });
  }
};

export default updateCourse;
