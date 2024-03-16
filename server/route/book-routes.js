const express = require('express');
const router = express.Router();
const {
    createBook, getBooks, getBook, updateBook, deleteBook
} = require('../controller/book-controller');

router.route('/')
    .post(createBook)
    .get(getBooks);

router.route('/:id')
    .get(getBook)
    .put(updateBook)
    .delete(deleteBook);

module.exports = router;