const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)
generateJoke()
async function generateJoke() {
  const response = await fetch("http://icanhazdadjoke.com", {
  headers: {
    Accept: "application/json",
  },
});
const joke = await response.json();
jokeEl.innerHTML = joke.joke
}