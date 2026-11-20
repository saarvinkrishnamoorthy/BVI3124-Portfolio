// Simple navigation and small page interactions
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', navigation.classList.contains('open'));
  });
}

document.querySelectorAll('.copyright-year').forEach(item => {
  item.textContent = new Date().getFullYear();
});

const currentPage = document.body.dataset.page;
document.querySelectorAll('.main-nav a').forEach(link => {
  if (link.dataset.link === currentPage) link.classList.add('active');
});

const readMoreButton = document.querySelector('.read-more-button');
const moreAbout = document.querySelector('#more-about');
if (readMoreButton && moreAbout) {
  readMoreButton.addEventListener('click', () => {
    moreAbout.hidden = !moreAbout.hidden;
    readMoreButton.textContent = moreAbout.hidden ? 'Read more +' : 'Read less -';
  });
}

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    projectCards.forEach(card => {
      card.style.display = button.dataset.filter === 'all' || card.dataset.category === button.dataset.filter ? '' : 'none';
    });
  });
});

const modal = document.querySelector('#project-modal');
if (modal) {
  document.querySelectorAll('.project-detail-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('#modal-title').textContent = button.dataset.title;
      document.querySelector('#modal-details').textContent = button.dataset.details;
      modal.classList.add('open');
    });
  });
  modal.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => modal.classList.remove('open')));
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    if (contactForm.checkValidity()) {
      status.textContent = 'Your details look good. This sample form does not send messages.';
    } else {
      status.textContent = 'Please complete all fields correctly.';
      contactForm.reportValidity();
    }
  });
}
