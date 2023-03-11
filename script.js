const form = document.querySelector("form");
const email = document.getElementById("mail");
const textError = document.querySelector(".error");
const iconError = document.querySelector(".icon-error");

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('click', (event) => {
  event.preventDefault();
  if(email.value !== '' && !emailRegExp.test(email.value)){
    iconError.style.display = 'block';
    textError.innerHTML = 'Please provide a valid email';
    email.className = 'invalid';
  } else {
    iconError.style.display = 'none';
    textError.innerHTML = '';
    email.className = 'valid';
  }
})