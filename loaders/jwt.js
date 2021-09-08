const jwt = require("jsonwebtoken");

const generateToken = (id, role) => {
  const token = jwt.sign({ id, role }, process.env.SECRET_KEY);
  return token;
};

const validateToken = (token) => {
  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    return user;
  } catch (err) {
    console.log(err);
    return False;
  }
};

module.exports = Object.freeze({
  generateToken,
  validateToken,
});
