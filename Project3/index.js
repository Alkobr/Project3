// index.js
const fileHandler = require('./fileHandler');
const movieManagement = require('./movieManagement');
const apiRequests = require('./apiRequests');
const userInteraction = require('./userInteraction');

// Initialize the application
async function init() {
  try {
    // Read movie catalog from the JSON file
    const movieCatalog = await fileHandler.readMovieCatalog();

    // Start the application by displaying the main menu
    userInteraction.displayMainMenu(movieCatalog);
  } catch (error) {
    console.error('Error initializing the application:', error);
  }
}

// Start the application
init();
