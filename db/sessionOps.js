const session = require('../models/sessions');
const addSessionData = async (sessionData) => {
  const newSession = new session(sessionData);
  await newSession.save();
};
module.exports = {
  addSessionData
}