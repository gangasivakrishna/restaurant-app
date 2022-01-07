const express = require('express');

const router = express.Router();
const restaurantRouter = require('./restaurants');

const { login, register } = require('../controllers/indexController');

router.post('/login', login);
router.post('/register', register);
router.post('/restaurant', restaurantRouter);

module.exports = router;
