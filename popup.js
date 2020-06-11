const getJoke = async () => {
  const joke = await fetch("https://icanhazdadjoke.com", { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(json => json.joke)
    .catch(() => "No Internet Connection");

  document.getElementById("joke").innerHTML = joke;
}

document.addEventListener("DOMContentLoaded", () => {
  getJoke(); // initial joke
  document.getElementById("one-more").addEventListener("click", getJoke);
});
