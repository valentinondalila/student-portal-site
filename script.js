const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((nav) => nav.classList.remove('active'));
    item.classList.add('active');
  });
});

const currentDate = new Date();
const dateString = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const heroText = document.querySelector('.hero-copy p');
if (heroText) {
  heroText.textContent = `You have 2 assignments due this week and 4 courses with strong progress this term. Today is ${dateString}.`;
}
