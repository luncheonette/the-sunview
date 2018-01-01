import moment from 'moment';

export const stylePastEvents = (idSelector) => {
  if (document.getElementById(idSelector)) {
    findPastEvents('event');
  }
}

const findPastEvents = (className = 'event') => {
  const eventsList = document.getElementsByClassName(className);

  for(let i = 0; i < eventsList.length; i++) {
    const eventEl = eventsList[i];
    const eventDate = eventEl.dataset.date;
    const eventClass = hasPassed(eventDate) ? "past" : "upcoming";
    eventEl.classList.add(eventClass);
  }
}

const hasPassed = (eventDate) => {
  const now = moment();
  const date = moment(eventDate, TIME_FORMAT);

  return date < now;
}

const TIME_FORMAT = "YYYY-MM-DD HH:mm:ss Z";

