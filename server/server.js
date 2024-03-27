const express = require('express');
const errorHandler = require('./middleware/error-handler');
const connectDb = require('./config/db-connection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1/books', require('./route/book-routes'));
app.use('/api/v1/users', require('./route/user-routes'));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));