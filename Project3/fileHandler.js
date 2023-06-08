// fileHandler.js
const fs = require('fs');

const MOVIE_CATALOG_FILE = 'movies.json';

function readMovieCatalog() {
  return new Promise((resolve, reject) => {
    fs.readFile(MOVIE_CATALOG_FILE, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

function writeMovieCatalog(movieCatalog) {
  return new Promise((resolve, reject) => {
    fs.writeFile(MOVIE_CATALOG_FILE, JSON.stringify(movieCatalog), 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  readMovieCatalog,
  writeMovieCatalog,
};
