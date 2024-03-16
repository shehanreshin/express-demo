const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/v1/contacts', require('./route/contact-routes'));

app.listen(port, () => console.log(`Server running on port ${port}`));