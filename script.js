const themeButton = document.querySelector('#theme');
let dark = true;
try { const saved = localStorage.getItem('geo-purple-theme'); if (saved) dark = saved === 'dark'; } catch {}
function applyTheme() {
  document.body.classList.toggle('dark', dark);
  document.body.classList.toggle('light', !dark);
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  themeButton.setAttribute('aria-pressed', String(dark));
}
applyTheme();
themeButton.addEventListener('click', () => {
  dark = !dark;
  applyTheme();
  try { localStorage.setItem('geo-purple-theme', dark ? 'dark' : 'light'); } catch {}
});

const navLinks = [...document.querySelectorAll('nav a')];
function updateNavigation() {
  let current = '';
  for (const link of navLinks) {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.getBoundingClientRect().top <= 180) current = link.getAttribute('href');
  }
  for (const link of navLinks) {
    const active = link.getAttribute('href') === current;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
window.addEventListener('scroll', updateNavigation, { passive: true });
window.addEventListener('hashchange', updateNavigation);
updateNavigation();
