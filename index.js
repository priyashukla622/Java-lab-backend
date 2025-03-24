
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import courseRouter from "./Routes/Route.js"; 
import router from "./Routes/authRoute.js";


dotenv.config(); 
const app = express();

const port = process.env.PORT;
app.use(express.json()


dotenv.config();


const mongoURI = process.env.MONGODB_URL;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected Successfully!");
}).catch((err) => {
    console.error("MongoDB Connection Error:", err);
});


app.use("/api/auth",router)

app.use("/api/courses", courseRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
