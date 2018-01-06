import listenToMenuClick from './site-menu';
import { stylePastEvents, hasPassed } from './events';

window.onload = () => {
  listenToMenuClick();
  stylePastEvents('all-events');
  renderHomeGrid();
}

const renderHomeGrid = () => {
  const eventsData = JSON.parse(document.getElementById('event-post-json').text);
  const pinnedData = JSON.parse(document.getElementById('pinned-post-json').text);

  let upcoming = [];
  let past = [];
  let allPosts = [];

  eventsData.forEach((event) => {
    hasPassed(event.date) ? past.push(event) : upcoming.unshift(event);
  });

  allPosts = upcoming.concat(past);

  pinnedData.forEach((post) => {
    const insertAt = Number(post.homepage_position) - 1;
    allPosts.splice(insertAt, 0, post);
  });

  allPosts.forEach((post) => {
    const postEl = document.createElement('div');
    const postTitle = document.createTextNode(post.title);
    postEl.appendChild(postTitle);
    document.body.append(postEl);
  });
}
