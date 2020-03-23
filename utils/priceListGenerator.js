const priceListGenerator = ({
  increaseRate,
  basePrice,
  listLength,
  priceList = [basePrice.toFixed(2)],
}) => {
  const percentage = parseFloat(increaseRate / 100);

  if (listLength >= 2) {
    priceList.push((basePrice * percentage + basePrice).toFixed(2));

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
