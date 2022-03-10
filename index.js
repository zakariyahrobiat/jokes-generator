joke = document.querySelector(".joke");
btn = document.getElementById("btn");

btn.addEventListener("click",generateJokes)
generateJokes()

async function generateJokes(){
    fetchJokes = await fetch("https://icanhazdadjoke.com/" ,{
    headers: {
        'Accept' : "application/json"
    }
    })
     jokeEl = await fetchJokes.json()
     joke.innerHTML = jokeEl.joke
}