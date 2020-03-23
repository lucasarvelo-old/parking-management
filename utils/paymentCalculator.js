module.exports = ({ checkInDate, checkOutDate, rates }) => {
  const parkingDuration = require('./parkingDurationCalculator')({
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
  });

  return rates.find(rate => rate.duration >= parkingDuration).price;
};
