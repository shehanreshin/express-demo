const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Get all books' });
});

router.route('/:id').get((req, res) => {
    res.status(200).json({ message: `Get book id: ${req.params.id}` });
});

router.route('/').post((req, res) => {
    res.status(200).json({ message: 'Book saved' })
});

router.route('/:id').delete((req, res) => {
    res.status(200).json({ message: `Book id: ${req.params.id} deleted` })
});

router.route('/:id').put((req, res) => {
    res.status(200).json({ message: `Book id: ${req.params.id} updated` })
});

module.exports = router;