module.exports = ({ checkInDate, checkOutDate }) => {
  try {
    const duration = checkOutDate.getTime() - checkInDate.getTime();

    if (duration < 0) return null; //validate checkOutDate is after checkInDate

    const hours = Math.floor(duration / (1000 * 60 * 60));

    return hours;
  } catch (error) {
    return console.log(error);
  }
};
