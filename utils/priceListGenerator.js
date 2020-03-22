const priceListGenerator = ({
  increaseRate,
  basePrice,
  listLength,
  priceList,
}) => {
  priceList = priceList || [basePrice];
  const percentage = parseFloat(increaseRate / 100);

  if (listLength >= 2) {
    priceList.push(basePrice * percentage + basePrice);

    priceListGenerator({
      increaseRate: increaseRate,
      basePrice: basePrice * percentage + basePrice,
      listLength: --listLength,
      priceList: priceList,
    });
  }

  return priceList;
};

module.exports = priceListGenerator;
