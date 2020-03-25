const priceListGenerator = require('../../utils/priceListGenerator');

const increaseRate = 50,
  basePrice = 3.0,
  listLength = 4;

test('Generate rate level array with 4 values, starting in 3.00 and increase 50% every level', () => {
  expect(
    priceListGenerator({
      increaseRate: increaseRate,
      basePrice: basePrice,
      listLength: listLength,
    })
  ).toStrictEqual(['3.00', '4.50', '6.75', '10.13']);
});
