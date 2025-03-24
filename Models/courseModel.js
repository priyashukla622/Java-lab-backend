import mongoose from "mongoose";

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
}, 
  subjects: [{ 
    type: String, 
    required: true 
}],
  teacher: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Teacher", required: true 
}, 
  description: { 
    type: String 
}, 
  duration: { 
    type: Number, 
    required: true 
}, 
  studentsEnrolled: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Student" }], 
  topics: [{ type: String }], 
  difficulty: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
  price: { type: Number, default: 0 }, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Course", courseSchema);
