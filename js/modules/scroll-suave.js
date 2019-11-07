export default function initScrollSuave() {

  const linksInternos = document.querySelectorAll('[data-scroll-suave] a[href^="#"]');
  // console.log(linksInternos)
  const arrowDown = document.querySelector('.arrow-down');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href); //get element by ID

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });

  arrowDown.addEventListener('click', scrollToSection);
}
