import express, { request } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
// import book from "./model/book.model.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

//connect to mongodb
try {
  mongoose.connect(URI);
  //if using momgodb atlas
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

// app.get("/book/:id", async (req, res) => {
//   const id = req.params.id;
//   const filter = { _id: new Object(id) };
//   const result = await book.findOne(filter);
//   res.send(result);
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
