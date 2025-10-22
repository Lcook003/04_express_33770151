// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

// Add contact page route: responds with contact details in HTML
router.get('/contact', (req, res) => {
	res.send(
		'<h1>This is the contact page</h1>' +
		'<p>Contact us at: <a href="mailto:leo.cook@example.com">leo.cook@example.com</a></p>' +
		'<p>Phone: +44 7700 900123</p>'
	);
});

// Add date page route: returns the current server date/time
router.get('/date', (req, res) => {
	const now = new Date();
	res.send(`<h1>Current date and time</h1><p>${now.toString()}</p>`);
});


// showing name passed in the URL

router.get('/welcome/:name', (req, res) => {
	const name = req.params.name; // read the name parameter
	res.send(`<h1>Welcome ${name}</h1>`);
});

// Chaining 
router.get('/chain',
	// first handler
	(req, res, next) => {
		res.write('first handler ran\n');
		next();
	},
	// second handler
	(req, res) => {
		res.end('second handler ran');
	}
);

// Sending files
router.get('/file', (req, res) => {
	res.sendFile(require('path').join(__dirname, '..', 'a.html'));
});

// Export the router object so index.js can access it
module.exports = router;
