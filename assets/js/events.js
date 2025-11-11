function parseDateString(dateString) {
  const date = new Date(dateString);
  return isNaN(date) ? null : date;
}

function hasPassed(start, end) {
  const startDate = parseDateString(start);
  const endDate = parseDateString(end);

  if (!startDate && !endDate) {
    return false;
  }

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const latestEventDate = endDate || startDate;
  latestEventDate.setHours(0, 0, 0, 0);

  return latestEventDate < now;
}

function styleEventsList() {
  const container = document.getElementById('all-events');
  if (!container) return;

  const eventsList = container.children;

  for (let i = 0; i < eventsList.length; i++) {
    const eventEl = eventsList[i];
    const { date, endDate } = eventEl.dataset;
    const eventClass = hasPassed(date, endDate) ? 'past' : 'upcoming';
    eventEl.classList.add(eventClass);
  }
}

styleEventsList();
