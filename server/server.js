require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const recipeRouter = require('./routes/recipe_router');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use(express.static('build'));

// ROUTES 
app.use('/recipe', recipeRouter);

// START UP SERVER
app.listen(port, function () {
    console.log('Listening on port: ', port);
});