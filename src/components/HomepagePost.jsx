import React from 'react'
import { readableDate } from '../helpers/events'

const HomepagePost = ({ title, url, date, image }) => {
  const formattedDate = readableDate(date)
  return (
    <a className="post-preview-link" href={url}>
      {image ? <img src={image} /> : null}
      <h3>{title}</h3>
      {date ? <p>{formattedDate}</p> : null}
    </a>
  )
}

export default HomepagePost
