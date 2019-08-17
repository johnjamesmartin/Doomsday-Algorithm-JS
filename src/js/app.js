/* Dependencies:
 *************************************************************/
import { togglePanelState } from './modules/utils';
import { state } from './modules/state';
import {
  workingoutPanelClose,
  workingoutPanelToggle
} from './modules/elements';

/* Listeners to open and close working out panel on click
   in a way that toggles the button text and panel visibility:
 *************************************************************/
workingoutPanelClose.onclick = () => {
  state.panel.open
    ? togglePanelState(false, false, 1)
    : togglePanelState(true, true, 0);
};
workingoutPanelToggle.onclick = () => {
  state.panel.open
    ? togglePanelState(false, false, 1)
    : togglePanelState(true, true, 0);
};
