var eventsList = document.getElementsByClassName('event');

for(let i = 0; i < eventsList.length; i++) {
  let eventEl = eventsList[i];
  let eventDate = new Date(eventEl.dataset.date);
  let now = new Date();

  let eventClass = eventDate < now ? "past" : "upcoming";
  eventEl.classList.add(eventClass);
}

