const btnRef = document.querySelector('.backToTop');

window.addEventListener('scroll', scrollFunction);

btnRef.addEventListener('click', topFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnRef.style.display = 'block';
  } else {
    btnRef.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
