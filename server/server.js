import express from "express";
import cors from "cors";
import "dotenv/config";

// initialize express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/',(req, res)=> res.send("Server is running"))

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))