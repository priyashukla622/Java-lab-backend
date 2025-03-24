import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import router from "./Routes/authRoute.js";


dotenv.config(); 
const app = express();

const port = process.env.PORT;
app.use(express.json())

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


app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
});
