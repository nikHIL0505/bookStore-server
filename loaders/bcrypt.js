const bcrypt = require("bcrypt");

const encryptPass = async (rawPass) => {
  const salt = await bcrypt.genSalt(12);
  const encryptedPass = await bcrypt.hash(rawPass, salt);

  return encryptedPass;
};

const comparePassword = async (rawPass, encryptPass) => {
  const result = bcrypt.compareSync(rawPass, encryptPass);

  return result;
};

module.exports = Object.freeze({ encryptPass, comparePassword });
