var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'COMP 2106' });
});

router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About Global Foods', 
    countries: [
      {name: 'Canada'},
      {name: 'India'},
      {name: 'Italy'},
      {name: 'Barbados'},
      {name: 'Iran'},
      {name: 'Taiwan'},
      {name: 'Korea'},
      {name: 'Vietnam'},
      {name: 'United States'}
    ]
  })
})

module.exports = router;
