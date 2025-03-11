const Book = require("../models/Book");

// Add a new book
exports.addBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json({ message: "Book added", book });
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    } 
};

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        res.status(200).json(await Book.find());
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    }
};

// Update a book
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (book) {
            res.status(200).json({ message: "Book updated", book });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (book) {
            res.status(200).json({ message: "Book deleted" });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    }
};
