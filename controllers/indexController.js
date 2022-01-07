const user = require('../models/users');
const Schema = require('../middleware/schemaValidator.js');
const { encrypt} = require('../utils/helper');
const {checkUser} = require('../db/userOps');
const {addSessionData} = require('../db/sessionOps');
const {v4: uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const login = async(req, res) => {
  try {
    const payload = req.body;
    console.log("🚀 ~ file: indexController.js ~ line 11 ~ login ~ payload", payload)
    const { username, password } = payload;
    const isValid = Schema.isLoginSchemaValid(payload);
    if(!isValid) {
      const errMsg = {
        "message": "Invalid login schema",
        "status": "fail"
    }
    return res.send(errMsg);
    }
    const isUserExist = await checkUser(username, password);
    console.log("🚀 ~ file: indexController.js ~ line 22 ~ login ~ isUserExist", isUserExist)
    if(!isUserExist){
      const errMsg = {
        "message": "Invalid Credentials",
        "status": "fail"
      }
      return res.send(errMsg);
    }
    const sessionId = uuidv4();
    const token = jwt.sign({username: username, sessionId},'secret', {expiresIn:'1hr'});
    const sessionData = {
      sessionId,
      username,
      token
    }
    await addSessionData(sessionData);
    const response = {
      "success": true,
      "data": {
          "accessToken":token,
          "sessionId":sessionId,
          "username": username
      }
  }
    return res.send(response);
  } catch (err) {
    const response = {
        "success": false,
        "data": {
          "errorMessage":"unable to login",
          "error":err.message
        }
    }
    
    return res.status(400).send(response);
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