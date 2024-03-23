const { constants } = require("../util/constant");

const createBook = (req, res) => {
    const { title, author, publisher } = req.body;
    if (!title || !author || !publisher) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("Ensure that all the fields are filled");
    }
    res.status(constants.CREATED).json({ message: 'Create book' });
};

const getBooks = (req, res) => {
    res.status(constants.OK).json({ message: 'Get all books' });
};

const getBook = (req, res) => {
    res.status(constants.OK).json({ message: `Get book id: ${req.params.id}` });
};

const updateBook = (req, res) => {
    res.status(constants.OK).json({ message: `Book id: ${req.params.id} updated` });
};

const deleteBook = (req, res) => {
    res.status(constants.OK).json({ message: `Book id: ${req.params.id} deleted` });
};

module.exports = {
    createBook, getBooks, getBook, updateBook, deleteBook
};