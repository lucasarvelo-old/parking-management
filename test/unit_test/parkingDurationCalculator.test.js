const parkingDurationCalculator = require('../../utils/parkingDurationCalculator');

const checkInDate = new Date('2020-01-01T10:00:00'),
  twoMinutesAfterCheckInDate = new Date('2020-01-01T10:02:00'),
  oneHourAfterCheckInDate = new Date('2020-01-01T11:00:00'),
  oneDayAfterCheckInDate = new Date('2020-01-02T10:00:00'),
  oneMonthAfterCheckInDate = new Date('2020-02-01T10:00:00'),
  oneYearAfterCheckInDate = new Date('2021-01-01T10:00:00'),
  threeHoursAndTwentytwoMinutesAfterCheckInDate = new Date(
    '2020-01-01T14:22:00'
  );

describe('Calculate parking duration in hours', () => {
  test('two minutes duration should return 0', () => {
    expect(
      parkingDurationCalculator({
        checkInDate: checkInDate,
        checkOutDate: twoMinutesAfterCheckInDate,
      })
    ).toBe(0);
  });

  test('one hour duration should return 1', () => {
    expect(
      parkingDurationCalculator({
        checkInDate: checkInDate,
        checkOutDate: oneHourAfterCheckInDate,
      })
    ).toBe(1);
  });

  test('one day duration should return 24', () => {
    expect(
      parkingDurationCalculator({
        checkInDate: checkInDate,
        checkOutDate: oneDayAfterCheckInDate,
      })
    ).toBe(24);
  });

  test('one month duration for 2020-01 should return 744', () => {
    expect(
      parkingDurationCalculator({
        checkInDate: checkInDate,
        checkOutDate: oneMonthAfterCheckInDate,
      })
    ).toBe(744);
  });

  test('one year duration from 2020-01-01 to 2021-01-01 should return 8784', () => {
    expect(
      parkingDurationCalculator({
        checkInDate: checkInDate,
        checkOutDate: oneYearAfterCheckInDate,
      })
    ).toBe(8784);
  });

  test('three hours and twenty-two minutes duration should return 4', () => {
    expect(
      parkingDurationCalculator({
        checkInDate: checkInDate,
        checkOutDate: threeHoursAndTwentytwoMinutesAfterCheckInDate,
      })
    ).toBe(4);
  });
});
