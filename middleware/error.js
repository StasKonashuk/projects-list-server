const { EmptyResultError } = require('sequelize');
const { GenericError } = require('../modules/error');

const sendNotFound = (res, message = 'Not found.') => {
  res.status(404).json({ message });
};

module.exports = {
  notFoundHandler(req, res) {
    sendNotFound(res);
  },
  // eslint-disable-next-line no-unused-vars
  errorHandler(err, req, res, next) {
    if (err instanceof EmptyResultError) {
      return sendNotFound(res);
    }

    const statusCode = err instanceof GenericError ? 400 : 500;
    const errorObject = { message: err.message || 'Unhandled error!' };

    return res.status(statusCode).json(errorObject);
  },
  asyncMiddleware: (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  },
};
