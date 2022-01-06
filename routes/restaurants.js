const express = require('express');

const router = express.Router();

const {
  getRestaurants,
  addRestaurant,
  updateRestaurant,
  removeRestaurant,
  getItems,
  addItem,
  updateItem,
  removeItem,
} = require('../controllers/restaurants');

// restaurant routes
router.get('/', getRestaurants);
router.post('/add', addRestaurant);
router.put('/:id', updateRestaurant);
router.delete('/:id', removeRestaurant);

// food item routes
router.get('/:id/items', getItems);
router.post('/:id/add', addItem);
router.put('/:id/update/:itemId', updateItem);
router.delete('/:id/remove/:itemId', removeItem);

module.exports = router;
