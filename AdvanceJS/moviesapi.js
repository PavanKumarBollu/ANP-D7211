const API_KEY = "aaaaaaaa"; // Replace with your actual OMDb API key
// const movieTitle = "Batman"; // Example movie title

const movieTitleInput = document.getElementById("movieTitle");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
  const movieTitle = movieTitleInput.value;
  // Construct the correct API URL
  // const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(movieTitle)}`;
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(movieTitle)}`;
  // const url = `https://www.omdbapi.com/?apikey=${API_KEY}&y=${encodeURIComponent(2024)}&t=${encodeURIComponent(movieTitle)}`; // Example with year filter
  // 2. Make the API call using fetch
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Convert the raw response into a JavaScript object
    })
    .then((data) => {
      console.log("Raw API Response:", data); // Log the raw response for debugging
      // 3. Check if the API actually found the movie
      for (const movie of data.Search) {
        console.log(`Movie Title: ${movie.Title}`);
        console.log(`Year: ${movie.Year}`);
      }
      // if (data.Response === "True") {
      //   console.log(`Movie Title: ${data.Title}`);
      //   console.log(`Year: ${data.Year}`);
      //   console.log(`Director: ${data.Director}`);
      //   console.log(`Plot: ${data.Plot}`);
      //   console.log(`Poster URL: ${data.Poster}`);
      // } else {
      //   console.log(`Error from API: ${data.Error}`); // e.g., "Movie not found!"
      // }
    })
    .catch((error) => {
      console.error("Fetch operation failed:", error);
    });
});
