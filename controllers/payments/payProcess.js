const payProcess = ({ Ticket, Parking, rates }) => async (req, res, next) => {
  const paymentCalculator = require('../../utils/paymentCalculator');
  const creditCardValidator = require('card-validator');

  try {
    const creditCardValidation = creditCardValidator.number(
      req.body.creditCardNumber
    );

    Ticket.findOne(
      { ticketNumber: req.params.ticketNumber },
      (error, ticket) => {
        if (error) return next(error);

        if (!ticket) {
          res.send('Ticket not found!');
        } else if (ticket.paid) {
          res.send('Ticket already paid!');
        } else {
          const totalInvoice = paymentCalculator({
            checkInDate: ticket.checkIn,
            checkOutDate: new Date(),
            rates: rates,
          });

          if (!creditCardValidation.isPotentiallyValid) {
            res.send('Invalid Credit Card Number');
          } else {
            ticket.updateOne({ paid: true, fee: totalInvoice }, error => {
              if (error) return next(error);

              Parking.findOneAndUpdate(
                { location: process.env.DEFAULT_PARKING_LOCATION },
                { $inc: { parkingSpotsInUse: -1 } },
                (error, parking) => {
                  if (error) return next(error);

                  res.send('Ticket has been pay. Thank you for you bussines!');
                }
              );
            });
          }
        }
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = payProcess;
