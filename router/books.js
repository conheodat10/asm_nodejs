import express from 'express';
import { newbooksSchema, CheckProductValidate } from '../middleware/products.js'; // Sửa lại import

import booksModel from '../models/books.js';

const bookrouter = express.Router(); // Sửa lại tạo instance của Router

bookrouter.post('/books', CheckProductValidate, async (req, res) => {
    try {
        const newBook = await new booksModel(req.body).save(); // Sửa lại tên biến
        res.send({ status: true, data: newBook }); // Sửa lại tên biến
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
});

bookrouter.get('/books', async (req, res) => {
    try {
        const response = await booksModel.find();
        res.send(response);
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
});

bookrouter.put('/books/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const response = await booksModel.findOneAndUpdate({ _id: id }, body, { new: true });
        res.send(response);
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
});

bookrouter.delete('/books/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await booksModel.findOneAndDelete({ _id: id });
        res.send(response);
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
});

export default bookrouter;
