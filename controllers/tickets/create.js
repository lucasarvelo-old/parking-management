const create = ({ Parking, Ticket }) => async (req, res, next) => {
  try {
    Parking.findOneAndUpdate(
      {
        location: process.env.DEFAULT_PARKING_LOCATION,
      },
      {},
      { upsert: true, setDefaultsOnInsert: true, new: true },
      (error, parking) => {
        if (error) return next(error);
        if (parking.parkingAvailable > 0) {
          const newTicket = new Ticket();
          newTicket.save(error => {
            parking.updateOne({ $inc: { parkingSpotsInUse: 1 } }, error => {
              if (error) return next(error);
              res.send(newTicket.ticketNumber.toString());
            });
          });
        } else {
          res.send('Parking Full');
        }
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = create;
