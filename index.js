import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config(); 
const app = express();

const port = process.env.PORT;


const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected Successfully!");

}).catch((err) => {
    console.error("MongoDB Connection Error:", err);
});

app.get("/", function (req, resp) {
    resp.send("home");
});

app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
});
