document.getElementById("search").addEventListener("click", () => {
    const x = document.getElementById("search-input").value.trim();

    if (x === "") {
        alert("Enter a movie name");
        return;
    }

    fetchApi(x);
});

async function fetchApi(x) {
    const url = `https://www.omdbapi.com/?s=${x}&apikey=48aa168d`;

    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log("meow")
        displayMovies(data.Search);
    } catch (e) {
        console.log(e);
    }
}

function displayMovies(movies) {
    const results = document.getElementById("results");
    results.innerHTML = "";

    if (!movies) {
        results.innerText = "No results found";
        return;
    }

    movies.forEach(movie => {
        const div = document.createElement("div");

        const title = document.createElement("h3");
        title.innerText = movie.Title;

        const img = document.createElement("img");
        img.src = movie.Poster;
        img.alt = movie.Title;
        
        div.classList = "movie-poster";

        div.appendChild(title);
        div.appendChild(img);

        results.appendChild(div);
    });
}

fetchApi();