var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var Country = require('../models/country')

// 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'COMP 2106' });
});

// router.get('/about', (req, res, next) => {
//   res.render('about', {
//     title: 'About Global Foods', 
//     countries: [
//       {name: 'Canada'},
//       {name: 'India'},
//       {name: 'Italy'},
//       {name: 'Barbados'},
//       {name: 'Iran'},
//       {name: 'Taiwan'},
//       {name: 'Korea'},
//       {name: 'Vietnam'},
//       {name: 'United States'}
//     ]
//   })
// })

router.get('/about', (req, res, next) => {
      //Use the food model and mongoose to select the foods from MongoDB
      Country.find((err, cs) => {
          if (err) console.log(err)
          else {
              res.render('about', {countries : cs})
          }
      })
  })

module.exports = router;
