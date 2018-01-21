var express = require('express');
var router = express.Router();
var moviesController = require('../controller/moviesController');
/* GET users listing. */
router.get('/all',moviesController.getAllMovies).post('/add',moviesController.addNewMovie);
//router.post('/add',moviesController.addNewMovie);
module.exports = router;
