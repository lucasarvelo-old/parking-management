const getTotal = ({ Ticket, rates }) => async (req, res, next) => {
  const paymentCalculator = require('../../utils/paymentCalculator');
  try {
    Ticket.findOne(
      { ticketNumber: req.params.ticketNumber },
      (error, ticket) => {
        if (error) return next(error);

        if (!ticket) {
          res.json('Ticket not found!');
        } else {
          if (ticket.paid) {
            res.json('Ticket already paid!');
          } else {
            const totalInvoice = paymentCalculator({
              checkInDate: ticket.checkIn,
              checkOutDate: new Date(),
              rates: rates,
            });
            res.json(totalInvoice);
          }
        }
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getTotal;
