/* Dictionary-like data for months, days, etc.:
 *************************************************************/
const data = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  daysPerMonth: {
    leapYear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    notLeapYear: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  },
  doomsdayArr: {
    leapYear: [4, 1, 7, 4, 2, 6, 4, 1, 5, 3, 7, 5],
    notLeapYear: [3, 7, 7, 4, 2, 6, 4, 1, 5, 3, 7, 5]
  }
};

export { data };
