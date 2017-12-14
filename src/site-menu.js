const listenToMenuClick = () => {
  const menu = document.getElementById('menu');
  document.body.addEventListener('click', (event) => {
    if (event.target.id === 'menu-toggle') {
      menu.classList.toggle('hidden');
    } else if (event.target.id !== 'menu') {
      menu.classList.add('hidden');
    }
  });
}

export default listenToMenuClick;
