const express = require('express');
const router = express.Router();

const welcomeController = require('../controllers/welcomeController');
const usersController = require('../controllers/usersController');

router.get('/', welcomeController.welcome);
router.get('/authentication', usersController.signinsignout);
router.use('/user' , require('./user'));
router.use('/' , require('./home'));

module.exports = router;