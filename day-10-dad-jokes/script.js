const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

async function getDadJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { 'Accept': 'application/json' }
  });
  const jsonResponse = await response.json();
  joke.innerHTML = jsonResponse.joke;
}

getDadJoke();

jokeBtn.addEventListener('click', getDadJoke);

