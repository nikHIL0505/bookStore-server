const makeHTTPResponse = ({
  res,
  status,
  body,
  headers = { "Content-Type": "application/json" },
}) => {
  return res.status(status).set(headers).send({ status, body });
};
module.exports = makeHTTPResponse;
