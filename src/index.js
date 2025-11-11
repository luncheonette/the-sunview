import React from 'react'
import ReactDOM from 'react-dom'
import getHomepagePostData from './helpers/getHomepagePostData'
import { styleEventsList } from './helpers/events'
import HomepagePostsList from './components/HomepagePostsList.jsx'

if (document.getElementById('react-root')) {
  ReactDOM.render(
    <HomepagePostsList posts={getHomepagePostData()} />,
    document.getElementById('react-root')
  )
}

window.onload = () => {
  styleEventsList('all-events')
}

