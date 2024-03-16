const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Get all contacts' });
});

router.route('/').post((req, res) => {
    res.status(200).json({ message: 'Contact saved' })
});

router.route('/:id').delete((req, res) => {
    res.status(200).json({ message: `Contact id: ${req.params.id} deleted` })
});

router.route('/:id').put((req, res) => {
    res.status(200).json({ message: `Contact id: ${req.params.id} updated` })
});

module.exports = router;