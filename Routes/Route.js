import express from "express";
import addCourse from "../controllers/addCourse.js"; 
import  {getCourse,getAll} from "../controllers/getCourse.js";
import updateCourse from "../controllers/editCourse.js";


const router=express.Router()
router.post("/addCourse",addCourse)
router.get("/getCourse", getCourse)
router.get("/getData/:id",getAll)
router.put("/update/:id",updateCourse)

export default router;