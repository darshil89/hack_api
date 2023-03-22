import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import { register } from "./controllers/auth.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import axios from 'axios';
import bcrypt from "bcrypt";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));



/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

/* MONGOOSE SETUP */


// DUMMY DATA
// const userIds = [
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId()]

// const users = [
//   {
//     _id: userIds[0],
//     firstName: "test",
//     lastName: "me",
//     email: "aaaaaaa@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     TravelPrice:45,
//     HotelPrice:78,
//     Price3:12,
//     createdAt: 1115211422,
//     updatedAt: 1115211422,
//     __v: 0,
//   },
//   {
//     _id: userIds[1],
//     firstName: "Steve",
//     lastName: "Ralph",
//     email: "thataaa@gmail.com",
//     password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     TravelPrice:45,
//     HotelPrice:78,
//     Price3:12,
//     createdAt: 1595589072,
//     updatedAt: 1595589072,
//     __v: 0,
//   }]


const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
  })
  .catch((error) => console.log(`${error} did not connect`));



// Register Route
app.post('/signin', function(req, res) {
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var email = req.body.email
  var password = req.body.password
  
  const NewUser= {
    firstName : firstName,
    lastName : lastName,
    email : email,
    password : password
  }
  console.log(NewUser)
  

  
});