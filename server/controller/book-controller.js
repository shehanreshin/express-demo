const createBook = (req, res) => {
    res.status(201).json({ message: 'Create book' })
};

const getBooks = (req, res) => {
    res.status(200).json({ message: 'Get all books' });
};

const getBook = (req, res) => {
    res.status(200).json({ message: `Get book id: ${req.params.id}` });
};

const updateBook = (req, res) => {
    res.status(200).json({ message: `Book id: ${req.params.id} updated` })
};

const deleteBook = (req, res) => {
    res.status(200).json({ message: `Book id: ${req.params.id} deleted` })
};

module.exports = {
    createBook, getBooks, getBook, updateBook, deleteBook
};