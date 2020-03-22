module.exports = ({ rateTimes, rateNames, increaseRate, basePrice }) => {
  const priceListGenerator = require('./priceListGenerator');

  try {
    //Calculate prices for each rate
    const prices = priceListGenerator({
      increaseRate: increaseRate,
      basePrice: basePrice,
      listLength: rateNames.length,
    });

    return rateNames.map((rateName, index) => {
      return {
        name: rateName,
        duration: rateTimes[index],
        price: prices[index],
      };
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
