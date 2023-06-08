// apiRequests.js

async function fetchMovieData(movieTitle) {
    const fetch = await import('node-fetch');
  const response = await fetch(`https://api.example.com/movies?title=${encodeURIComponent(movieTitle)}`);
  const data = await response.json();
  return data;
}

module.exports = {
    fetchMovieData: fetchMovieData
  };
