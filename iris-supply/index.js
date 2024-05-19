const openMenu = () => {
  document.getElementById('menu').classList.toggle('translate-x-full');
  document.querySelector('body').classList.add('overflow-y-hidden');
  document.getElementById('overlay').classList.remove('opacity-0');
  document.getElementById('overlay').classList.add('opacity-50');
};

const closeMenu = () => {
  document.getElementById('menu').classList.toggle('translate-x-full');
  document.querySelector('body').classList.remove('overflow-y-hidden');
  document.getElementById('overlay').classList.remove('opacity-50');
  document.getElementById('overlay').classList.add('opacity-0');
};

const showOrHideScrollToTopButton = () => {
  const button = document.getElementById('scroll-to-top-button');
  if (window.scrollY > 80) {
    button.classList.remove('opacity-0');
    button.classList.add('opacity-100');
    button.disabled = false;
  } else {
    button.classList.add('opacity-0');
    button.classList.remove('opacity-100');
    button.disabled = true;
  }
};

const scrollToTop = () => window.scrollTo({ top: 0 });

window.onload = () => {
  document.getElementById('menu-button').addEventListener('click', openMenu);
  document.getElementById('menu-button-close').addEventListener('click', closeMenu);
  document.querySelectorAll('#mobile-nav a').forEach((link) => link.addEventListener('click', closeMenu));

  document.getElementById('scroll-to-top-button').addEventListener('click', scrollToTop);
  window.addEventListener('scroll', showOrHideScrollToTopButton);
};