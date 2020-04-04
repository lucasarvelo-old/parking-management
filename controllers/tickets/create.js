const create = ({ Parking, Ticket }) => async (req, res, next) => {
  try {
    Parking.findOneAndUpdate(
      {
        location: process.env.DEFAULT_PARKING_LOCATION,
      },
      { totalParkingSpots: process.env.TOTAL_PARKING_SPOTS },
      { upsert: true, setDefaultsOnInsert: true, new: true },
      (error, parking) => {
        if (error) return next(error);
        if (parking.parkingAvailable > 0) {
          const newTicket = new Ticket();
          newTicket.save(error => {
            if (error) return next(error);
            parking.updateOne({ $inc: { parkingSpotsInUse: 1 } }, error => {
              if (error) return next(error);
              res.json(newTicket.ticketNumber.toString());
            });
          });
        } else {
          res.json('Parking Full');
        }
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = create;
