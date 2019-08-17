/* Dependencies:
 *************************************************************/
import { data } from './data';
import { isLeapYear } from './utils';
import { workingoutTextarea } from './elements';

/* Variables:
 *************************************************************/
let dayOutput,
  inputDate,
  inputMonth,
  inputYear,
  inputYearVal,
  inputYearLastTwoDigits,
  stepone,
  steponeExplanation,
  steptwo,
  steptwoExplanation,
  stepthree,
  stepthreeExplanation,
  stepfour,
  stepfourExplanation,
  stepfive,
  stepfiveExplanation,
  stepfiveDoomsday,
  stepsix,
  stepsixExplanation,
  stepseven,
  stepsevenExplanation;

/* Init:
 *************************************************************/
const init = () => {
  inputDate = document.getElementById('select-input-date');
  inputMonth = document.getElementById('select-input-month');
  inputYear = document.getElementById('select-input-year');
  inputYearVal = inputYear.value;
  inputYearLastTwoDigits = inputYearVal.substr(-2);
  dayOutput = document.getElementById('day-output');
};

/* Step One:
 *************************************************************/
const calculateStepOne = () => {
  init();
  stepone = Math.floor(inputYearLastTwoDigits / 12);
  steponeExplanation = `1. Divide last two digits of year by 12 (${inputYearLastTwoDigits}) & round down: ${inputYearLastTwoDigits}/12 = `;
};

/* Step Two:
 *************************************************************/
const calculateStepTwo = () => {
  steptwo = inputYearLastTwoDigits - stepone * 12;
  steptwoExplanation = `2. Get difference between years last two digits and previous result (${inputYearLastTwoDigits -
    stepone}) & multiply by 12 = `;
};

/* Step Three:
 *************************************************************/
const calculateStepThree = () => {
  stepthree = Math.floor(steptwo / 4);
  stepthreeExplanation = '3. Divide previous result by 4 & round down: ';
};

/* Step Four:
 *************************************************************/
const calculateStepFour = () => {
  const firstDigitYear = String(inputYearVal)
    .toString()
    .charAt(0);
  const anchorNum = firstDigitYear == 1 ? 3 : 2;
  stepfour = stepone + steptwo + stepthree + anchorNum;
  stepfourExplanation = '4. Add all results plus the anchor day value: ';
};

/* Step Five:
 *************************************************************/
const calculateStepFive = () => {
  stepfive = stepfour % 7;
  stepfiveExplanation =
    '5. Take modulus of 7 from previous result for value (0 - 6) for day (Doomsday): ';
  stepfiveDoomsday = data.days[stepfive];
};

/* Step Six:
 *************************************************************/
const calculateStepSix = () => {
  stepsix = isLeapYear(inputYearVal);
  stepsixExplanation = '6. Is it a leap year?: ';
};

/* Step Seven:
 *************************************************************/
const calculateStepSeven = () => {
  let day = inputDate.value;
  let monthIndex = data.months.indexOf(inputMonth.value);
  let dayIndex, doomsdayDay;

  // Consider leap year in getting doomsday:
  doomsdayDay = isLeapYear(inputYearVal)
    ? data.doomsdayArr.leapYear[monthIndex]
    : data.doomsdayArr.notLeapYear[monthIndex];

  // If day is greater than doomsday....
  if (day < doomsdayDay) {
    dayIndex = stepfive - (doomsdayDay - day);
  } else if (day > doomsdayDay) {
    dayIndex = stepfive + (day - doomsdayDay);
    if (dayIndex >= 7) dayIndex = dayIndex % 7;
  } else {
    dayIndex = stepfive;
  }

  // Correct for negative index:
  if (dayIndex < 0) dayIndex = 7 + dayIndex;

  stepseven = data.days[dayIndex];
  stepsevenExplanation = `${inputDate.value} ${
    inputMonth.value
  } ${inputYearVal} was a: `;
  output();
};

/* Output to working out panel and output day to page:
 *************************************************************/
const output = () => {
  workingoutTextarea.value = '';
  workingoutTextarea.value += `${steponeExplanation} ⌊${stepone}⌋ \n\n`;
  workingoutTextarea.value += `${steptwoExplanation} ${steptwo} \n\n`;
  workingoutTextarea.value += `${stepthreeExplanation} ⌊${stepthree}⌋ \n\n`;
  workingoutTextarea.value += `${stepfourExplanation} ${stepfour} \n\n`;
  workingoutTextarea.value += `${stepfiveExplanation} ${stepfive} (${stepfiveDoomsday}) \n\n`;
  workingoutTextarea.value += `${stepsixExplanation} ${stepsix} \n\n`;
  workingoutTextarea.value += `\t${stepsevenExplanation} ${stepseven} \n\n`;
  dayOutput.style.display = 'none';
  setTimeout(() => {
    dayOutput.style.display = 'block';
    dayOutput.innerHTML = stepseven;
  }, 100);
};

/* Calculate steps methods:
 *************************************************************/
const calculateSteps = () => {
  calculateStepOne();
  calculateStepTwo();
  calculateStepThree();
  calculateStepFour();
  calculateStepFive();
  calculateStepSix();
  calculateStepSeven();
  //
};

/* Exports:
 *************************************************************/
export { calculateSteps };
