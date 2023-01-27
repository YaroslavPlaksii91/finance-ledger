const header = document.querySelector('.nav');
const { height } = header.getBoundingClientRect();

window.addEventListener('scroll', onPageScroll);

function onPageScroll() {
  if (scrollY > height) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
