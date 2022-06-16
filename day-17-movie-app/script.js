const apiBaseUrl = 'https://api.themoviedb.org/3/';
const apiUrlEndPoint = 'trending/movie/week?';
const apiKey = 'api_key=3ca572a1aa1a9340496bae01829ae6e2';

const imgBaseUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w500';

const main = document.getElementById('main');
const form = document.getElementById('form');
const searchInput = document.getElementById('search');

generateMovies(apiBaseUrl + apiUrlEndPoint + apiKey);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (searchInput.value !== '') {
    generateMovies(apiBaseUrl + 'search/movie?' + apiKey + '&query="' + searchInput.value + '"');
  }
});


async function generateMovies(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (data) {
    printMovies(data.results);
  }
}

function printMovies(movies) {
  main.innerHTML = '';
  movies.forEach(movie => {
    main.innerHTML = main.innerHTML + `
      <section class="movie">
        <div class="movie__header">
          <img class="movie__poster" src="${imgBaseUrl + imgSize + movie.poster_path}" alt="poster">
          <p class="movie__overview">
            ${movie.overview}
          </p>
        </div>
        <div class="movie__footer">
          <h3 class="movie__title">${movie.title}</h3>
          <span class="movie__rating ${generateClassName(movie.vote_average)}">${movie.vote_average}</span>
        </div>
      </section>`;
  });
}

function generateClassName(num) {
  return num < 5
    ? 'red'
    : num >= 7.5
      ? 'green'
      : 'orange';
}