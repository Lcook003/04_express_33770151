// Set up express
const express = require("express");
const app = express();
const port = 8000; 

// Handle the routes inline in this file
// Load the route handlers from the routes/main.js file

const mainRoutes = require('./routes/main');
// Mount the router at the root path
// (i.e about, contact, date) are used by the application
app.use('/', mainRoutes);

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
