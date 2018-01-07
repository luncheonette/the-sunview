import React from 'react'
import HomepageListItem from './HomepageListItem.jsx'

const HomepagePostsList = ({ posts }) => (
  <ul className="featured-posts posts-grid content-grid">
    {posts.length
      ? posts.map((post, index) => <HomepageListItem key={index} post={post} />)
      : null
    }
  </ul>
)

export default HomepagePostsList
