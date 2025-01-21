import moment from 'moment'

export const styleEventsList = (idSelector) => {
  if (document.getElementById(idSelector)) {
    const eventsList = document.getElementById(idSelector).children

    for(let i = 0; i < eventsList.length; i++) {
      const eventEl = eventsList[i]
      const { date, endDate } = eventEl.dataset
      const eventClass = hasPassed(date, endDate) ? "past" : "upcoming"
      eventEl.classList.add(eventClass)
    }
  }
}

export const hasPassed = (eventDate, endDate) => {
  if (!eventDate && !endDate) { return false }

  const now = moment()

  if (endDate) {
    console.log('passed? (endDate)', moment(endDate, TIME_FORMAT) < now)
    return moment(endDate, TIME_FORMAT) < now
  } else {
    console.log('passed? (start only)', moment(eventDate, TIME_FORMAT) < now)
    return moment(eventDate, TIME_FORMAT) < now
  }
}

export const formatSingleDayEvent = (date) => {
  return moment(date, TIME_FORMAT).format("dddd MMMM D, YYYY")
}

export const formatMultiDayEvent = (startDate, endDate) => {
  const start = moment(startDate, TIME_FORMAT).format("dddd MMMM D");
  const end = moment(endDate, TIME_FORMAT).format("dddd MMMM D, YYYY");
  return `${start} - ${end}`

}

const TIME_FORMAT = "YYYY-MM-DD HH:mm:ss Z"

