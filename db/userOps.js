const bcrypt = require('bcrypt');
const user = require('../models/users');

const checkUser = async (username, password) => {
  const result = await user.find({ username: username });

  if (result && result.length == 1) {
    const userData = result[0];
    const match = await bcrypt.compare(password, userData.password);
    if (match) return true;
    else return false;
  }
  return false;
};

module.exports = {
  checkUser
};