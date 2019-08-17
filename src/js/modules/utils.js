/* Dependencies:
 *************************************************************/
import { state } from './state';
import { labels } from './labels';
import { workingoutPanel, workingoutPanelToggle } from './elements';

/* Check if year value provided is a leap year:
 *************************************************************/
const isLeapYear = year => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

/* Toggle the panel:
 *************************************************************/
const togglePanelState = (open, panelShow, index) => {
  state.panel.open = open;
  workingoutPanel.style.display = panelShow ? 'block' : 'none';
  workingoutPanelToggle.textContent = labels.togglePanelBtn[index];
};

/* Exports:
 *************************************************************/
export { isLeapYear, togglePanelState };
