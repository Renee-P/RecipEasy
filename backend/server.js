var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Enable CORS
app.use(cors());

// Set port
const port = process.env.PORT || 5000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send("Backend Server :3");
});

// Import and register routes for recipes (assuming you have this)
const recipeRoutes = require('./routes/recipe.routes');
recipeRoutes(app);

// Import the admin authentication route
const adminAuth = require('./routes/adminAuth'); 
app.use('/admin', adminAuth);  // Admin route for login

// Import the user authentication route
const userAuth = require('./routes/userAuth'); 
app.use('/user', userAuth);  // User route for login

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
