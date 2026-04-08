
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
    },
    {
        Title: "Interstellar",
        Year: "2014",
        Poster: "https://img.omdbapi.com/?apikey=48aa168d&i=tt0816692"
    },
    {
        Title: "The Matrix",
        Year: "1999",
        Poster: "https://img.omdbapi.com/?apikey=48aa168d&i=tt0133093"
    },
    {
        Title: "Jurassic Park",
        Year: "1993",
        Poster: "https://img.omdbapi.com/?apikey=48aa168d&i=tt0107290"
    },
    {
        Title: "The Shawshank Redemption",
        Year: "1994",
        Poster: "https://img.omdbapi.com/?apikey=48aa168d&i=tt0111161"
    },
    {
        Title: "The Lion King",
        Year: "1994",
        Poster: "https://img.omdbapi.com/?apikey=48aa168d&i=tt0110357"
    },
    {
        Title: "The Godfather",
        Year: "1972",
        Poster: "https://img.omdbapi.com/?apikey=48aa168d&i=tt0068646"
    }
];

let movies = [];
let currentMovies = [];
let showFavoritesOnly = false;
const favoriteIds = new Set();

const searchButton = document.getElementById("search");
const sortSelect = document.getElementById("sort-select");
const filterYear = document.getElementById("filter-year");
const themeButton = document.getElementById("toggle-theme");
const favoritesButton = document.getElementById("show-favorites");

searchButton.addEventListener("click", () => {
    const x = document.getElementById("search-input").value.trim();

    if (x === "") {
        movies = [...defaultMovies];
        applyFiltersAndSort();
        return;
    }

    fetchApi(x);
});

sortSelect.addEventListener("change", () => {
    applyFiltersAndSort();
});

filterYear.addEventListener("input", () => {
    applyFiltersAndSort();
});

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    updateThemeButton();
});

favoritesButton.addEventListener("click", () => {
    showFavoritesOnly = !showFavoritesOnly;
    favoritesButton.innerText = showFavoritesOnly ? "Show All" : "My Favorites";
    applyFiltersAndSort();
});

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");
    themeButton.innerText = isDark ? "Light Mode" : "Dark Mode";
}

window.addEventListener("DOMContentLoaded", () => {
    movies = [...defaultMovies];
    currentMovies = [...movies];
    displayMovies(currentMovies);
    updateThemeButton();
});

async function fetchApi(x) {
    const url = `https://www.omdbapi.com/?s=${x}&apikey=48aa168d`;

    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log("meow")
        movies = data.Search || [];
        applyFiltersAndSort();
    } catch (e) {
        console.log(e);
    }
}

function movieKey(movie) {
    return `${movie.Title}-${movie.Year}`;
}

function applyFiltersAndSort() {
    let tempMovies = [...movies];

    if (showFavoritesOnly) {
        tempMovies = tempMovies.filter(movie => favoriteIds.has(movieKey(movie)));
    }

    const minYear = parseInt(filterYear.value) || 0;
    tempMovies = tempMovies.filter(movie => parseInt(movie.Year) >= minYear);

    const sortBy = sortSelect.value;
    if (sortBy === "title") {
        tempMovies = tempMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (sortBy === "year") {
        tempMovies = tempMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }

    currentMovies = tempMovies;
    displayMovies(currentMovies);
}

function displayMovies(movies) {
    const results = document.getElementById("results");
    results.innerHTML = "";

    if (!movies || movies.length === 0) {
        results.innerText = "No results found";
        return;
    }

    movies.forEach(movie => {
        const div = document.createElement("div");

        const title = document.createElement("h3");
        title.innerText = movie.Title;

        const year = document.createElement("p");
        year.innerText = `Year: ${movie.Year}`;

        const img = document.createElement("img");
        img.src = movie.Poster;
        img.alt = movie.Title;

        const key = movieKey(movie);
        const isFavorite = favoriteIds.has(key);
        const favoriteBtn = document.createElement("button");
        favoriteBtn.innerHTML = isFavorite ? "♥ Favorited" : "♡ Favorite";
        favoriteBtn.classList.add("favorite-btn");
        favoriteBtn.addEventListener("click", () => {
            if (favoriteIds.has(key)) {
                favoriteIds.delete(key);
            } else {
                favoriteIds.add(key);
            }
            applyFiltersAndSort();
        });

        div.classList = "movie-poster";

        div.appendChild(title);
        div.appendChild(year);
        div.appendChild(img);
        div.appendChild(favoriteBtn);

        results.appendChild(div);
    });
}

function sortMovies() {
    applyFiltersAndSort();
}

function filterMovies() {
    applyFiltersAndSort();
}
