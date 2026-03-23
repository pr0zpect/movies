# 🎬 Movie Watchlist App

A sleek and modern **Movie Watchlist Web App** built using **HTML, CSS, JavaScript, and React**. This app allows users to search for movies in real-time, save their favorites, and manage a personalized watchlist — all with a smooth, dark-themed UI inspired by platforms like Disney+ and HBO Max.

---

## 🚀 Features

### 🔍 Live Movie Search

* Search for movies dynamically using the **OMDb API**
* Results update as the user types (or on button click)
* Displays movie posters, titles, and basic details

### ⭐ Watchlist Toggle

* Add or remove movies from your personal watchlist
* Each movie card includes a toggle button
* Watchlist updates instantly

### 📂 Saved Movies Sidebar

* Sticky sidebar showing saved movies in real-time
* Helps users track their growing list easily

### 🧹 Empty States

* Clean UI messages for:

  * No search results found
  * Empty watchlist

### 🎲 Optional Feature (Challenge)

* **Random Movie Night Button**

  * Picks a random movie from the watchlist
  * Perfect for indecisive movie nights 🍿

---

## 🎨 UI/UX Design

* Dark theme inspired by **Disney+ / HBO Max**
* Responsive layout for desktop and mobile
* Smooth hover effects and transitions
* Sticky sidebar for better usability

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Framework:** React
* **APIs Used:**

  * OMDb API → Movie search data
    https://www.omdbapi.com/
  * TMDB API → (Optional enhancements like detailed metadata)
    https://developer.themoviedb.org/docs/getting-started
  * Watchmode API → (Optional streaming availability info)
    https://api.watchmode.com/

---

## 📦 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-watchlist.git
   ```

2. Navigate into the project directory:

   ```bash
   cd movie-watchlist
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Add your API key:

   * Create a `.env` file
   * Add:

     ```
     REACT_APP_OMDB_API_KEY=your_api_key_here
     ```

5. Run the app:

   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
movie-watchlist/
│── public/
│── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── SearchBar.js
│   │   ├── WatchlistSidebar.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │
│   ├── App.js
│   ├── index.js
│
│── .env
│── package.json
│── README.md
```

---

## 🧠 Future Improvements

* Add pagination or infinite scroll
* Show detailed movie info (ratings, plot, cast)
* Integrate streaming platform availability using Watchmode API
* Add user authentication and cloud watchlist sync
* Improve accessibility (ARIA roles, keyboard navigation)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 💡 Inspiration

Inspired by modern streaming platforms and the need for a simple, personal movie tracker.

---

## 🙌 Acknowledgements

* OMDb API
* TMDB API
* Watchmode API

---

Enjoy building and happy coding! 🎥✨
