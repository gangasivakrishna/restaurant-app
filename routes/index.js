const express = require('express');

const router = express.Router();
const restaurantRouter = require('./restaurants');

const { login, register } = require('../controllers/indexController');

router.use('/login', login);
router.use('/register', register);
router.use('/restaurant', restaurantRouter);

module.exports = router;
