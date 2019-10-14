const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

router.get('/', (req, res) => {
    console.log('in /get request');
    let url = `https://api.spoonacular.com/recipes/search?apiKey=${process.env.API_KEY}&query=pizza&number=2`
    axios({
        method: 'GET',
        url: url
    }).then( (response) => {
        console.log(response.data)
        res.send(response.data)
    }).catch( error => {
        console.log("error with GET", error)
    })
})

module.exports = router;