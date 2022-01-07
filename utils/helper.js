const bcrypt = require('bcrypt');
const saltRounds = 10;
const encrypt = async (plaintext) => {
    const hashPassword = bcrypt.hash(plaintext, saltRounds);
    return hashPassword;
}

module.exports = {
    encrypt
}