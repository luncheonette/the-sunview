import { hasPassed } from './events'

const parseJsonFromDOM = (idSelector) => {
  const el = document.getElementById(idSelector)
  if (!el) { return }

  return JSON.parse(el.text)
}

const getHomepagePostData = () => {
  const eventsData = parseJsonFromDOM('event-post-json')
  const pinnedData = parseJsonFromDOM('pinned-post-json')

  let upcoming = [], past = [], allPosts = []

  eventsData.forEach((eventPost) => {
    if (hasPassed(eventPost.date)) {
      eventPost.eventStatus = "past"
      past.push(eventPost)
    } else {
      eventPost.eventStatus = "upcoming"
      upcoming.unshift(eventPost)
    }
  })

  allPosts = upcoming.concat(past)

  pinnedData.forEach((post) => {
    const insertAt = Number(post.homepage_position) - 1
    allPosts.splice(insertAt, 0, post)
  })

  return allPosts
}

export default getHomepagePostData
