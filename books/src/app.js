const express = require('express');
const Book = require('./models/book');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Books Service' });
});

app.get('/api/v1/books', async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});

app.post('/api/v1/books', async (req, res) => {
  const book = new Book({ name: req.body.name });
  await book.save();
  res.json(book);
});

module.exports = app;
