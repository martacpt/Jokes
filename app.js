let button = document.getElementById('getjoke')
let jokesection = document.getElementById('joke')

function getJoke() {

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
        .then(response => response.json())
        .then(data => jokesection.innerText = data.joke)

}
    


button.addEventListener("click", getJoke)