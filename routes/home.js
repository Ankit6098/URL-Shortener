const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/home', homeController.home);
router.post('/addUrl', homeController.addUrl);
router.get('/:id', homeController.redirect);

module.exports = router;