const errorMiddleware = (err, _req, res, _next) => {
  res.status(400).send({ message: err });
};

module.exports = errorMiddleware;