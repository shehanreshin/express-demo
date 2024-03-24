const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add the title of the book"],
        },
        author: {
            type: String,
            required: [true, "Please add the author of the book"],
        },
        publisher: {
            type: String,
            required: [true, "Please add the publisher of the book"],
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Book", bookSchema);