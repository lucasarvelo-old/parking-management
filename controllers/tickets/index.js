module.exports = ({ models, rates }) => {
  const router = require('express').Router();
  const create = require('./create');
  const getTotal = require('./getTotal');

  router
    .post('/', create(models))
    .get('/:ticketNumber', getTotal({ ...models, rates: rates }));

  return router;
};
