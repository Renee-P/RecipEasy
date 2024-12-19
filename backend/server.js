var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Backend Server :3");
});

const recipeRoutes = require('./routes/recipe.routes');
recipeRoutes(app);

const adminRoutes = require('./routes/admin.routes');
adminRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
