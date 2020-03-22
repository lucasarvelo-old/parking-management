module.exports = models => {
  const router = require('express').Router();
  const create = require('./create');

  router.post('/', create(models)).get('/:ticketNumber', (req, res, next) => {
    const ticketNumber = req.params.ticketNumber;
    res.send(ticketNumber);
  });

  return router;
};
