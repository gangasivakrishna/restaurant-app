const Ajv = require('ajv');
const res = require('express/lib/response');
const ajv = new Ajv();
const signupSchema = {
  type: 'object',
  required: ['username', 'password', 'email'],
  properties: {
    name: { type: 'string' },
    username: { type: 'string' },
    password: { type: 'string' },
    role: { type: 'string' },
    email: { type: 'string' },
    address: { type: 'string' },
    enable: { type: 'boolean' },
  },
  additionalProperties: true,
};

const loginSchema = {
  type: 'object',
  required: ['username', 'password'],
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
  },
  additionalProperties: false,
};
const isSignupSchemaValid = (payload) => {
  try {
    const validate = ajv.compile(signupSchema);
    const valid = validate(payload);
    if (!valid) {
      return false;
    }
    return true;
  } catch (error) {
    return res.send(400);
  }
};
const isLoginSchemaValid = (payload) => {
  try {
    const validate = ajv.compile(loginSchema);
    const valid = validate(payload);
    if (!valid) {
      return false;
    }
    return true;
  } catch (error) {
    return res.send(error.message);
  }
};
module.exports = {
  isSignupSchemaValid,
  isLoginSchemaValid,
};
