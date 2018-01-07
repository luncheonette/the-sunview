import moment from 'moment'

export const styleEventsList = (idSelector) => {
  if (document.getElementById(idSelector)) {
    const eventsList = document.getElementById(idSelector).children

    for(let i = 0; i < eventsList.length; i++) {
      const eventEl = eventsList[i]
      const { date } = eventEl.dataset
      const eventClass = hasPassed(date) ? "past" : "upcoming"
      eventEl.classList.add(eventClass)
    }
  }
}

export const hasPassed = (eventDate) => {
  if (!eventDate) { return false }
  const now = moment()
  const date = moment(eventDate, TIME_FORMAT)

  return date < now
}

export const readableDate = (date) => {
  return moment(date, TIME_FORMAT).format("dddd MMMM D, YYYY")
}

const TIME_FORMAT = "YYYY-MM-DD HH:mm:ss Z"

