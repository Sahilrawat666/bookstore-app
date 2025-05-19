import express, { request } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import book from "./model/book.model.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

//connect to mongodb
try {
  mongoose.connect(URI);
  // mongoose.connect(URI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  console.log("connected to mongodb");
} catch (error) {
  console.log("error:", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// find book by id
// app.get("/books/:id"),
//   async (req, res) => {
//     try {
//       const { id } = req.params;
//       const book = await book.findById(id);
//       return res.status(200).json(book);
//     } catch (error) {
//       console.log(error.message);
//       res.ststus(500).json({ message: error.message });
//     }
//   };
