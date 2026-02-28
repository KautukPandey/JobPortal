import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv  from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: ["https://localhost:5000"],
  credentials: true,
};
app.use(cors(corsOption));


app.use("/api/v1/user",userRoute)


app.listen(PORT, () => {
    connectDB()
  console.log(`Server is running on ${PORT}`);
});
