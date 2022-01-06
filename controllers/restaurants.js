const getRestaurants = async (req, res) => {
  try {
    return res.send('get restaurants');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const addRestaurant = async (req, res) => {
  try {
    return res.send('add restaurants');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    return res.send('update restaurants');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const removeRestaurant = async (req, res) => {
  try {
    return res.send('remove restaurants');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const getItems = async (req, res) => {
  try {
    return res.send('get items');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const addItem = async (req, res) => {
  try {
    return res.send('add items');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const updateItem = async (req, res) => {
  try {
    return res.send('update items');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const removeItem = async (req, res) => {
  try {
    return res.send('remove items');
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  getRestaurants,
  addRestaurant,
  updateRestaurant,
  removeRestaurant,
  getItems,
  addItem,
  updateItem,
  removeItem,
};
