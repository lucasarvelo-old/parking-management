const priceListGenerator = require('../../utils/priceListGenerator');

const increaseRate = 50,
  basePrice = 3.0,
  listLength = 4;

describe('Generate array with length 4 with 50% increment', () => {
  test('Generate rate level array with 4 values, starting in 3.00 and increment of 50% every level', () => {
    expect(
      priceListGenerator({
        increaseRate: increaseRate,
        basePrice: basePrice,
        listLength: listLength,
      })
    ).toStrictEqual(['3.00', '4.50', '6.75', '10.13']);
  });
});
