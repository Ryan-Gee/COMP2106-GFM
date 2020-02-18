//Add express for URL routing
var express = require('express')
var router = express.Router()

//Add mongoose and model references for CRUD
var mongoose = require('mongoose')
var Food = require('../models/food')
var Country = require('../models/country')


//GET main food page
router.get('/', (req, res, next) => {
    //USe the food model and mongoose to select the foods from MongoDB
    Food.find((err, foods) => {
        if (err) console.log(err)
        else {
            //Load the foods view
            console.log(foods)
            res.render('foods/index', {foods : foods})
        }
    })
})

router.get('/add', (req, res, next) => {
    //Load the respective view
    Country.find((err, cs) => {
        if (err) console.log(err)
        else {
            //Load the foods view
            res.render('foods/add', {countries : cs})
        }
    })
})

router.post('/add', (req, res, next) => {
    Food.create({
        name: req.body.name,
        country: req.body.country
    }, function(err, newFood) {
        if (err){
            console.log(err)
            res.send(err)
        }
        else {
            res.redirect('/foods')
        }

    })
})

// :_id means the method expects a parameter named "_id"
router.get('/delete/:_id', (req, res, next) => {
    Food.remove({
        _id: req.params._id
    }, (err) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            res.redirect('/foods')
        }
    })
})

router.get('/edit/:_id', (req, res, next) => {
    Food.findById(req.params._id, (err, food) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            res.render('foods/edit', {
                food: food
            })
        }
    })
})

router.post('/edit/:_id', (req, res, next) => {
    Food.findById(req.params._id, (err, food) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            Food.update(
            {
                _id: req.params._id
            },
            {
                name: req.body.name,
                country: req.body.name
            }, (err) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                else {
                    res.redirect('/foods')
                }
            })
        }
    })
})

//Make controller public
module.exports = router