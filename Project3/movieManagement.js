// movieManagement.js
function addMovie(movieCatalog, newMovie) {
    movieCatalog.push(newMovie);
  }
  
  function updateMovie(movieCatalog, movieIndex, updatedMovie) {
    movieCatalog[movieIndex] = updatedMovie;
  }
  
  function deleteMovie(movieCatalog, movieIndex) {
    movieCatalog.splice(movieIndex, 1);
  }
  
  function searchMovies(movieCatalog, searchQuery) {
    return movieCatalog.filter((movie) => {
      const { title, director, genre } = movie;
      return title.includes(searchQuery) || director.includes(searchQuery) || genre.includes(searchQuery);
    });
  }
  
  function filterMovies(movieCatalog, filterCriteria) {
    return movieCatalog.filter((movie) => {
      const { genre, releaseYear } = movie;
      const { genreFilter, yearFilter } = filterCriteria;
      return (
        (genreFilter === '' || genre === genreFilter) &&
        (yearFilter === '' || releaseYear === parseInt(yearFilter))
      );
    });
  }
  
  module.exports = {
    addMovie,
    updateMovie,
    deleteMovie,
    searchMovies,
    filterMovies,
  };
  