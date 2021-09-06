const bcrypt = require("bcrypt");

const encryptPass = async (rawPass) => {
  const salt = await bcrypt.genSalt(12);
  const encryptedPass = await bcrypt.hash(rawPass, salt);

  return encryptedPass;
};

module.exports = Object.freeze({ encryptPass });
