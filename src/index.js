import listenToMenuClick from './site-menu';
import { hidePastEvents, stylePastEvents } from './events';

window.onload = () => {
  listenToMenuClick();
  hidePastEvents('upcoming-events');
  stylePastEvents('all-events');
}
