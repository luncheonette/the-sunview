import listenToMenuClick from './site-menu';
import { stylePastEvents } from './events';

window.onload = () => {
  listenToMenuClick();
  stylePastEvents('all-events');
}
