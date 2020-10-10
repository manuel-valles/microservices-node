const bookBtn = document.getElementById('book-btn');
const videoBtn = document.getElementById('video-btn');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('matches');

const create = (URL, target) => {
  const targetValue = document.getElementById(target).value;
  try {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: targetValue }),
    });
  } catch (error) {
    console.error(error);
  }
};

bookBtn.addEventListener('click', (event) => {
  event.preventDefault();
  create('http://localhost:8080/api/v1/books', 'book-name');
});

videoBtn.addEventListener('click', (event) => {
  event.preventDefault();
  create('http://localhost:8080/api/v1/videos', 'video-name');
});

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  try {
    fetch('http://localhost:8080/api/v1/search')
      .then((response) => response.json())
      .then((results) => {
        results.forEach((data) => {
          searchResults.innerHTML += `
            <li>
              <p>${data.name}</p>
              <p>${data.type}</p>
            </li>
          `;
        });
      });
  } catch (error) {
    console.error(error);
  }
  return false;
});
