const { constants } = require("../util/constant");
const asyncHandler = require('express-async-handler');

const createBook = asyncHandler(async (req, res) => {
    const { title, author, publisher } = req.body;
    if (!title || !author || !publisher) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("Ensure that all the fields are filled");
    }
    res.status(constants.CREATED).json({ message: 'Create book' });
});

const getBooks = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({ message: 'Get all books' });
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