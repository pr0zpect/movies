const defaultMovies = [
    {
        Title: "Inception",
        Year: "2010",
        Poster: "https://img.omdbapi.com/?apikey=48aa168d&i=tt1375666"
    },
    {
        Title: "Gladiator",
        Year: "2000",
        Poster: "https://img.omdbapi.com/?apikey=48aa168d&i=tt0172495"
    }
];

let movies = [];
let currentMovies = [];

async function fetchApi(x) {
    const url = `https://www.omdbapi.com/?s=${x}&apikey=48aa168d`;
    try {
        let res = await fetch(url);
        let data = await res.json();
        movies = data.Search || [];
    } catch (e) {
        console.log(e);
    }
}

function displayMovies(moviesList) {
    const results = document.getElementById("results");
    if (!results) return;
    results.innerHTML = "";
    if (!moviesList || moviesList.length === 0) {
        results.innerText = "No results found";
        return;
    }
    // Rendering logic placeholder
}
