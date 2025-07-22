document.getElementById('get-joke').addEventListener('click', async () => {
  const jokeEl = document.getElementById('joke');
  jokeEl.textContent = 'Loading joke...';

  try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const data = await res.json();
    jokeEl.textContent = data.joke || "Couldn't fetch a joke!";
  } catch (err) {
    jokeEl.textContent = 'Error loading joke!';
    console.error(err);
  }
});
