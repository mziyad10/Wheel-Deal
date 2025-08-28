import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";

// initialize express app
const app = express();

// connect DB
await connectDB()

// middleware
app.use(cors());
app.use(express.json());

app.get('/',(req, res)=> res.send("Server is running"))
app.use('/api/user',userRouter)
app.use('/api/owner',ownerRouter)

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
