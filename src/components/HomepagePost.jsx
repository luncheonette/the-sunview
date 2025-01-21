import React from 'react'
import { formatMultiDayEvent, formatSingleDayEvent } from '../helpers/events'

const HomepagePost = ({ title, url, date, endDate, image }) => {
  const isMultiDayEvent = !!date && !!endDate;

  return (
    <a className="post-preview-link" href={url}>
      {image ? <img src={image} /> : null}
      <h3>{title}</h3>
      <p>
        {isMultiDayEvent ? formatMultiDayEvent(date, endDate) : formatSingleDayEvent(date)}
      </p>
    </a>
  )
}

export default HomepagePost
