const paymentCalculator = require('../../utils/paymentCalculator');

const rates = [
  { name: '1hr', duration: 1, price: '3.00' },
  { name: '3hr', duration: 3, price: '4.50' },
  { name: '6hr', duration: 6, price: '6.75' },
  { name: 'ALL DAY', duration: 24, price: '10.13' },
];

const checkInDate = new Date('2020-01-01T10:00:00'),
  twoMinutesAfterCheckInDate = new Date('2020-01-01T10:02:00'),
  oneHourAfterCheckInDate = new Date('2020-01-01T11:00:00'),
  threeHoursAfterCheckInDate = new Date('2020-01-01T13:00:00'),
  fiveHoursAndFiveMinutesAfterCheckInDate = new Date('2020-01-01T16:00:00'),
  oneDayAfterCheckInDate = new Date('2020-01-02T10:00:00');

test('two minutes duration pay 3.00', () => {
  expect(
    paymentCalculator({
      checkInDate: checkInDate,
      checkOutDate: twoMinutesAfterCheckInDate,
      rates: rates,
    })
  ).toBe('3.00');
});

test('one hour duration pay 3.00', () => {
  expect(
    paymentCalculator({
      checkInDate: checkInDate,
      checkOutDate: oneHourAfterCheckInDate,
      rates: rates,
    })
  ).toBe('3.00');
});

test('three hours duration pay 4.50', () => {
  expect(
    paymentCalculator({
      checkInDate: checkInDate,
      checkOutDate: threeHoursAfterCheckInDate,
      rates: rates,
    })
  ).toBe('4.50');
});

test('five hours and five minutes duration duration pay 6.75', () => {
  expect(
    paymentCalculator({
      checkInDate: checkInDate,
      checkOutDate: fiveHoursAndFiveMinutesAfterCheckInDate,
      rates: rates,
    })
  ).toBe('6.75');
});

test('one day duration duration pay 10.13', () => {
  expect(
    paymentCalculator({
      checkInDate: checkInDate,
      checkOutDate: oneDayAfterCheckInDate,
      rates: rates,
    })
  ).toBe('10.13');
});
