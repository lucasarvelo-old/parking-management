module.exports = ({ checkInDate, checkOutDate }) => {
  const duration = checkOutDate.getTime() - checkInDate.getTime();
  const hours = Math.floor(duration / (1000 * 60 * 60)) % 24;

  return hours;
};
