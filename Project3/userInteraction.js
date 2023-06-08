const readline = require('readline');
const movieManagement = require('./movieManagement');
const fileHandler = require('./fileHandler');
const apiRequests = require('./apiRequests');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMainMenu(movieCatalog) {
  console.log('=== Movie Catalog ===');
  console.log('1. Display Movie Catalog');
  console.log('2. Add New Movie');
  console.log('3. Update Movie Details');
  console.log('4. Delete Movie');
  console.log('5. Search and Filter');
  console.log('6. Fetch Movie Data');
  console.log('0. Exit');

  rl.question('Select an option: ', async (choice) => {
    switch (choice) {
      case '1':
        displayMovieCatalog(movieCatalog);
        break;
      case '2':
        await addNewMovie(movieCatalog);
        break;
      case '3':
        await updateMovieDetails(movieCatalog);
        break;
      case '4':
        await deleteMovie(movieCatalog);
        break;
      case '5':
        searchAndFilterMovies(movieCatalog);
        break;
      case '6':
        await fetchMovieData(movieCatalog);
        break;
      case '0':
        console.log('Exiting the application.');
        rl.close();
        process.exit(0);
        break;
      default:
        console.log('Invalid choice. Please try again.');
    }

    displayMainMenu(movieCatalog);
  });
}

function displayMovieCatalog(movieCatalog) {
  console.log('=== Movie Catalog ===');
  movieCatalog.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie.title}`);
  });
  console.log();
}

async function addNewMovie(movieCatalog) {
  console.log('=== Add New Movie ===');
  const newMovie = {};

  newMovie.title = await getInput('Enter the movie title: ');
  newMovie.director = await getInput('Enter the movie director: ');
  newMovie.releaseYear = parseInt(await getInput('Enter the release year: '));
  newMovie.genre = await getInput('Enter the genre: ');

  movieManagement.addMovie(movieCatalog, newMovie);
  await fileHandler.writeMovieCatalog(movieCatalog);
  console.log('Movie added successfully.\n');
}

async function updateMovieDetails(movieCatalog) {
  console.log('=== Update Movie Details ===');
  const movieIndex = parseInt(await getInput('Enter the movie index to update: '));

  if (isNaN(movieIndex) || movieIndex < 1 || movieIndex > movieCatalog.length) {
    console.log('Invalid movie index.\n');
    return;
  }

  const movie = movieCatalog[movieIndex - 1];
  const updatedMovie = {};

  updatedMovie.title = await getInput(`Enter the new title (current: ${movie.title}): `);
  updatedMovie.director = await getInput(`Enter the new director (current: ${movie.director}): `);
  updatedMovie.releaseYear = parseInt(await getInput(`Enter the new release year (current: ${movie.releaseYear}): `));
  updatedMovie.genre = await getInput(`Enter the new genre (current: ${movie.genre}): `);

  movieManagement.updateMovie(movieCatalog, movieIndex - 1, updatedMovie);
  await fileHandler.writeMovieCatalog(movieCatalog);
  console.log('Movie details updated successfully.\n');
}

async function deleteMovie(movieCatalog) {
  console.log('=== Delete Movie ===');
  const movieIndex = parseInt(await getInput('Enter the movie index to delete: '));

  if (isNaN(movieIndex) || movieIndex < 1 || movieIndex > movieCatalog.length) {
    console.log('Invalid movie index.\n');
    return;
  }

  movieManagement.deleteMovie(movieCatalog, movieIndex - 1);
  await fileHandler.writeMovieCatalog(movieCatalog);
  console.log('Movie deleted successfully.\n');
}

async function searchAndFilterMovies(movieCatalog) {
  console.log('=== Search and Filter ===');
  const searchQuery = await getInput('Enter the search query: ');
  const genreFilter = await getInput('Enter the genre filter (leave blank for no filter): ');
  const yearFilter = await getInput('Enter the year filter (leave blank for no filter): ');

  const filterCriteria = {
    genreFilter: genreFilter,
    yearFilter: yearFilter,
  };

  const filteredMovies = movieManagement.filterMovies(movieCatalog, filterCriteria);

  if (filteredMovies.length === 0) {
    console.log('No movies found matching the search and filter criteria.\n');
  } else {
    console.log('=== Filtered Movies ===');
    filteredMovies.forEach((movie, index) => {
      console.log(`${index + 1}. ${movie.title}`);
    });
    console.log();
  }
}

async function fetchMovieData(movieCatalog) {
  console.log('=== Fetch Movie Data ===');
  const movieTitle = await getInput('Enter the movie title to fetch data: ');

  try {
    const movieData = await apiRequests.fetchMovieData(movieTitle);

    if (!movieData) {
      console.log('No movie data found for the specified title.\n');
      return;
    }

    movieManagement.addMovie(movieCatalog, movieData);
    await fileHandler.writeMovieCatalog(movieCatalog);
    console.log('Movie data fetched and added successfully.\n');
  } catch (error) {
    console.error('Error fetching movie data:', error);
    console.log('Failed to fetch movie data. Please try again.\n');
  }
}

function getInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

module.exports = {
  displayMainMenu,
};
