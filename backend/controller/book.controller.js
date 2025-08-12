import mongoose from "mongoose";
import Book from "../model/book.model.js";
import book from "../model/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};

//get book by id

// export const getBookById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("GIT GET/book/:id route", req.params.id);

//     // Check if id is provided
//     if (!id) {
//       return res.status(400).json({ message: "Book ID is required" });
//     }

//     // Check if id is a valid MongoDB ObjectId
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid book ID format" });
//     }

//     const book = await Book.findById(id);

//     if (!book) {
//       return res.status(404).json({ message: "Book not found" });
//     }

//     res.status(200).json(book);
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(500).json(error);
//   }
// };
// export const getBookById = async (req, res) => {
//   const id = req.params.id;
//   const filter = { _id: new Object(id) };
//   const result = await book.findOne(filter);
//   res.send(result);
// };
