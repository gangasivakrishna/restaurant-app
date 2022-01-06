const login = async (req, res) => {
  try {
    return res.send('login');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const register = async (req, res) => {
  try {
    return res.send('register');
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  login,
  register,
};
