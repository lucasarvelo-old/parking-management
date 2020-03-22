module.exports = () => {
  return require('./ratesTableGenerator')({
    rateTimes: process.env.RATES_DURATION.split(',').map(Number),
    rateNames: process.env.RATES_NAME.split(','),
    increaseRate: parseFloat(process.env.RATE_INCREASE),
    basePrice: parseFloat(process.env.STARTING_RATE),
  });
};
