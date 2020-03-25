const ratesTableGenerator = require('../../utils/ratesTableGenerator');

const rateTimes = [1, 3, 6, 24],
  rateNames = ['1hr', '3hr', '6hr', 'ALL DAY'],
  increaseRate = 50,
  basePrice = 3.0;

test('Generate rates table for 1hr, 3hr, 6hr and ALL DAY rates with an increase of 50% for each rate level and 3.00 as the base price', () =>
  expect(
    ratesTableGenerator({
      rateTimes: rateTimes,
      rateNames: rateNames,
      increaseRate: increaseRate,
      basePrice: basePrice,
    })
  ).toStrictEqual([
    { name: '1hr', duration: 1, price: '3.00' },
    { name: '3hr', duration: 3, price: '4.50' },
    { name: '6hr', duration: 6, price: '6.75' },
    { name: 'ALL DAY', duration: 24, price: '10.13' },
  ]));
