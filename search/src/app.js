const fetch = require('node-fetch');
const express = require('express');
// ToDo: extract the common code (models) in to a npm module
const Video = require('./models/video_model');
const Book = require('./models/books_model');
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Search Service' });
});

app.get('/api/v1/search', async (req, res) => {
  const videosPromise = Video.find({});
  const booksPromise = Book.find({});
  const promises = [videosPromise, booksPromise];
  const [videos, books] = await Promise.all(promises);

  res.json(videos.concat(books));
});

// To avoid loops we should not start a call chain longer than one: "search -> books|videos -> <no more calls>"
app.get('/api/v1/search/depends-on', async (req, res) => {
  try {
    const videoPromise = fetch('http://videos:3000/');
    const bookPromise = fetch('http://books:3000/');
    const promises = [videoPromise, bookPromise];
    const [videoResponse, bookResponse] = await Promise.all(promises);
    const videoJson = await videoResponse.json();
    const bookJson = await bookResponse.json();

    res.json({ video: videoJson, book: bookJson });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = app;
