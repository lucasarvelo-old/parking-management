const getTotal = ({ Ticket, rates }) => async (req, res, next) => {
  const paymentCalculator = require('../../utils/paymentCalculator');
  try {
    Ticket.findOne(
      { ticketNumber: req.params.ticketNumber },
      (error, ticket) => {
        if (error) return next(error);

        if (!ticket) {
          res.send('Ticket not found!');
        } else {
          const totalInvoice = paymentCalculator({
            checkInDate: ticket.checkIn,
            checkOutDate: new Date(),
            rates: rates,
          });

          res.send(totalInvoice);
        }
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getTotal;
