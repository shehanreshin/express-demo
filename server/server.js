const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/api/v1/contacts', (req, res) => {
    res.status(200).json({ message: 'Get all contacts' });
});

app.post('/api/v1/contacts', (req, res) => {
    res.status(200).json({ message: 'Contact saved' })
});

app.delete('/api/v1/contacts/:id', (req, res) => {
    res.status(200).json({ message: `Contact id: ${req.params.id} deleted` })
});

app.put('/api/v1/contacts/:id', (req, res) => {
    res.status(200).json({ message: `Contact id: ${req.params.id} updated` })
});