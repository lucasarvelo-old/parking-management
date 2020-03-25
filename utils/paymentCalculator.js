module.exports = ({ checkInDate, checkOutDate, rates }) => {
  try {
    const parkingDuration = require('./parkingDurationCalculator')({
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    });

    const rate =
      rates.find(rate => rate.duration >= parkingDuration) ||
      rates[rates.length - 1]; //use the biggest fee when the duration exceeds all rate levels

    return rate.price;
  } catch (error) {
    return console.log(error);
  }
};
