const user = require('../models/users');
const Schema = require('../middleware/schemaValidator.js');
const { encrypt } = require('../utils/helper');
const login = async (req, res) => {
  try {
    return res.send('login');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const register = async (req, res) => {
  try {
    const payload = req.body;
    const hashPassword = await encrypt(payload.password);
    payload.password = hashPassword;
    const isValid = Schema.isSignupSchemaValid(payload);
    if (!isValid) {
      const errMsg = {
        message: 'Invalid Schema',
        status: 'fail',
      };
      return res.send(errMsg);
    }
    const newUser = new user(payload);
    const data = await newUser.save();
    const response = {
      success: true,
      data,
    };
    return res.send(response);
  } catch (err) {
    const response = {
      success: false,
      data: {
        errorMessage: 'unable to register',
        error: err.message,
      },
    };
    return res.status(400).send(response);
  }
};

module.exports = {
  login,
  register,
};