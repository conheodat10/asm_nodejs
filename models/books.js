import mongoose from "mongoose";

const bookSchema = mongoose.Schema({

    title: String,
    description: String,
    image: String,
    author: String,
    category: Number,
});
const booksModel = mongoose.model('books', pschema);
export default booksModel