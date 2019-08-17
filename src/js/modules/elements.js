/* Dependencies:
 *************************************************************/
import { data } from './data';
import { isLeapYear } from './utils';
import { calculateSteps } from './steps';

/* DOM elements:
 *************************************************************/
let inputDate = document.getElementById('select-input-date');
let inputMonth = document.getElementById('select-input-month');
let inputYear = document.getElementById('select-input-year');
let workingoutPanel = document.getElementById('div-working-out-panel');
let workingoutPanelClose = document.getElementById(
  'btn-working-out-panel-close'
);
const workingoutPanelToggle = document.getElementById(
  'btn-toggle-working-out-panel'
);
const workingoutTextarea = document.getElementById('textarea-working-out');
const btnCalculate = document.getElementById('btn-calculate');

/* Generate dates for month (Feb has 28/29 days, for example):
 *************************************************************/
const generateDatesForMonth = daysInMonth => {
  inputDate.innerHTML = '';
  for (let i = 0; i < daysInMonth; i++)
    inputDate.options[i] = new Option(i + 1);
};

/* Calculate/recalculate steps:
 *************************************************************/
btnCalculate.onclick = () => {
  calculateSteps();
};

/* On date change, calculate steps:
 *************************************************************/
inputDate.onchange = () => {
  calculateSteps();
};

/* On month change, calculate steps (check for leap year).
   If leap year, generate dates per month accordingly.
   For example, on a leap year Feburary has 29 days:
 *************************************************************/
inputMonth.onchange = () => {
  const leapYear = isLeapYear(inputYear.value) ? true : false;
  const month = inputMonth.value;
  const monthIndex = data.months.indexOf(month);
  const daysInMonth = leapYear
    ? data.daysPerMonth.leapYear[monthIndex]
    : data.daysPerMonth.notLeapYear[monthIndex];
  generateDatesForMonth(daysInMonth);
  calculateSteps();
};

/* On year change, calculate steps:
 *************************************************************/
inputYear.onchange = () => {
  calculateSteps();
};

/* Exports:
 *************************************************************/
export {
  btnCalculate,
  inputDate,
  inputMonth,
  inputYear,
  workingoutPanel,
  workingoutPanelClose,
  workingoutPanelToggle,
  workingoutTextarea
};
