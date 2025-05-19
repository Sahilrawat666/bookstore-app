import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  mame: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});

const book = mongoose.model("book", bookSchema);
export default book;
