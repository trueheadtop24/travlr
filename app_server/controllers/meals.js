//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));




/* Get meals */ 
const fs = require('fs')

const meals = (req, res) => {
    pageTitle = 'Travlr Getaways - Meals';
    res.render('meals', {title: pageTitle});

};

module.exports = {
    meals
}