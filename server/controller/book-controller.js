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
    res.status(constants.OK).json({ message: `Get book id: ${req.params.id}` });
});

const updateBook = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({ message: `Book id: ${req.params.id} updated` });
});

const deleteBook = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({ message: `Book id: ${req.params.id} deleted` });
});

module.exports = {
    createBook, getBooks, getBook, updateBook, deleteBook
};