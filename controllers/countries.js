//Add express for URL routing
var express = require('express')
var router = express.Router()

//Add mongoose and model references for CRUD
var mongoose = require('mongoose')
var Country = require('../models/country')

router.get('/', (req, res, next) => {
    //USe the food model and mongoose to select the foods from MongoDB
    Country.find((err, cs) => {
        if (err) console.log(err)
        else {
            res.render('/about', {countries : cs})
        }
    })
})

router.get('/add', (req, res, next) => {
    //Load the respective view
    res.render('countries/add')
})

router.post('/add', (req, res, next) => {
    Country.create({
        name: req.body.name
    }, function(err, newCountry) {
        if (err){
            console.log(err)
            res.send(err)
        }
        else {
            res.redirect('/about')
        }

    })
})

module.exports = router 