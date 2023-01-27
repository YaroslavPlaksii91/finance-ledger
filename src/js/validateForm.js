const form = document.querySelector('.form');
const emailInputWrapRef = document.querySelector('.form__input-wrap--email');
const emailInputRef = document.querySelector('#email');

const warning = `<span class="warning"
  ><svg width="20" height="20" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 11.04C13 11.352 12.8929 11.59 12.6788 11.754C12.4647 11.918 12.2019 12 11.8904 12H1.10961C0.798143 12 0.53534 11.916 0.321204 11.748C0.107068 11.58 0 11.344 0 11.04C0 10.8 0.0700809 10.556 0.210243 10.308L5.59479 0.66C5.85175 0.22 6.15544 0 6.50584 0C6.85624 0 7.15214 0.22 7.39353 0.66L12.7898 10.32C12.9299 10.576 13 10.816 13 11.04ZM7.31177 4.908V3.156H5.68823V4.908C5.68823 5.02 5.69602 5.126 5.71159 5.226C5.72716 5.326 5.74858 5.438 5.77583 5.562C5.80308 5.686 5.8245 5.792 5.84007 5.88L6.14376 7.824H6.83288L7.14825 5.88C7.16382 5.8 7.18718 5.696 7.21833 5.568C7.24948 5.44 7.27284 5.326 7.28841 5.226C7.30398 5.126 7.31177 5.02 7.31177 4.908ZM7.31177 9.552C7.31177 9.32 7.23196 9.124 7.07233 8.964C6.9127 8.804 6.71998 8.724 6.49416 8.724C6.27613 8.724 6.0873 8.804 5.92767 8.964C5.76804 9.124 5.68823 9.32 5.68823 9.552C5.68823 9.784 5.76804 9.982 5.92767 10.146C6.0873 10.31 6.27613 10.392 6.49416 10.392C6.71998 10.392 6.9127 10.31 7.07233 10.146C7.23196 9.982 7.31177 9.784 7.31177 9.552Z" fill="#EB5757"/>
</svg>This is a required field</span
>`;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email },
  } = e.currentTarget;

  const warnRef = document.querySelector('.warning');

  if (email.value === '' && !warnRef) {
    emailInputWrapRef.insertAdjacentHTML('beforeend', warning);
    return;
  }
}

emailInputRef.addEventListener('input', () => {
  const warnRef = document.querySelector('.warning');

  if (warnRef) {
    warnRef.remove();
  }
});
