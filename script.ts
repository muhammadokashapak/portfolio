const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const siteMenu = document.querySelector<HTMLElement>('#site-menu');
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.site-nav a'));
const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));
const yearElement = document.getElementById('currentYear');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

if (navToggle && siteMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteMenu.getAttribute('data-state') === 'open';
    const nextState = isOpen ? 'closed' : 'open';
    siteMenu.setAttribute('data-state', nextState);
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (siteMenu?.getAttribute('data-state') === 'open') {
      siteMenu.setAttribute('data-state', 'closed');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const revealOnScroll = (): void => {
  const threshold = window.innerHeight * 0.85;
  revealItems.forEach((section: HTMLElement) => {
    const top = section.getBoundingClientRect().top;
    if (top < threshold) {
      section.classList.add('is-visible');
    }
  });
};

const highlightNavLink = (): void => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
  let activeId = 'intro';

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= window.innerHeight * 0.25) {
      activeId = section.getAttribute('id') || activeId;
    }
  });

  navLinks.forEach(link => {
    const target = link.getAttribute('href')?.slice(1);
    if (target === activeId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', () => {
  revealOnScroll();
  highlightNavLink();
});

window.addEventListener('load', () => {
  revealOnScroll();
  highlightNavLink();
});