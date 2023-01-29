const btnRef = document.querySelector('.backToTop');

window.addEventListener('scroll', onScroll);

btnRef.addEventListener('click', onBtnClick);

function onScroll() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnRef.style.display = 'block';
  } else {
    btnRef.style.display = 'none';
  }
}

function onBtnClick() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
