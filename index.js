// import express from "express"
// import mongoose from "mongoose"
// import dotenv from "dotenv";
// import cors from "cors"
// dotenv.config(); 
// const app = express();
// const port = process.env.PORT;
// import courseRouter from "./Routes/Route"

// const mongoURI = process.env.MONGODB_URL;
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("MongoDB Connected Successfully!");

// }).catch((err) => {
//     console.error("MongoDB Connection Error:", err);
// });

// app.get("/", function (req, resp) {
//     resp.send("home");
// });

// app.listen(port, () => {
//     console.log(`Server running on the port ${port}`);
// });



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import courseRouter from "./Routes/Route.js"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; 

<<<<<<< HEAD

=======
>>>>>>> 8e0e51f4135955e46dd4927bc2def2fffcdb16d7
const mongoURI = process.env.MONGODB_URL;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected Successfully!");
}).catch((err) => {
    console.error("MongoDB Connection Error:", err);
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/courses", courseRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
