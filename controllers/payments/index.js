module.exports = ({ models, rates }) => {
  const router = require('express').Router();
  const payProcess = require('./payProcess');

  router.post('/:ticketNumber', payProcess({ ...models, rates: rates }));

  return router;
};
