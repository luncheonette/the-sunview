import React from 'react'
import HomepagePost from './HomepagePost.jsx'
import HomepageImage from './HomepageImage.jsx'

const renderHomepageComponent = (post) => {
  const { title, image, url, image_description, date, endDate, type, eventStatus } = post

  if (post.type === "images") {
    return (
      <HomepageImage
        image={image}
        image_description={image_description}
      />
    )
  } else {
    return (
      <HomepagePost
        title={title}
        image={image}
        url={url}
        date={date}
        endDate={endDate}
        eventStatus={eventStatus}
      />
    )
  }
}

const HomepageListItem = ({ post }) => {
  const { eventStatus } = post

  return (
    <li className={`post-preview grid-item ${eventStatus ? eventStatus : ""}`}>
      {renderHomepageComponent(post)}
    </li>
  )
}

export default HomepageListItem
