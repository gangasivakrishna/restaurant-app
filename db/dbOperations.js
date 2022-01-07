const bcrypt = require('bcrypt');
const user = require('../models/users');
const session = require('../models/sessions');
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
const addSessionData = async (sessionData) => {
  const newSession = new session(sessionData);
  await newSession.save();
};
module.exports = {
  checkUser,
  addSessionData,
};