const { constants } = require("../util/constant");
const asyncHandler = require('express-async-handler');
const Book = require('../model/book-model');

const createBook = asyncHandler(async (req, res) => {
    const { title, author, publisher } = req.body;
    if (!title || !author || !publisher) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("Ensure that all the fields are filled");
    }

    res.status(constants.CREATED).json(await Book.create({
        title, author, publisher,
    }));
});

const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find();
    res.status(constants.OK).json(books);
});

const getBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(constants.NOT_FOUND);
        throw new Error("Book not found");
    }

    res.status(constants.OK).json(book);
});

const updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(constants.NOT_FOUND);
        throw new Error("Book not found");
    }

    res.status(constants.OK).json(await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    ));
});

const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
        res.status(constants.NOT_FOUND);
        throw new Error("Book not found");
    }

    res.status(constants.OK).json(book);
});

module.exports = {
    createBook, getBooks, getBook, updateBook, deleteBook
};