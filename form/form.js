const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const city = document.getElementById("city");
const zipcode = document.getElementById("zipcode");

form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
    const inputElement = element.parentElement;
    const errorDisplay = inputElement.querySelector(".error");

    errorDisplay.innerText = message;
    inputElement.classList.add("error");
    inputElement.classList.remove("success");
}

const setSuccess = element => {
    const inputElement = element.parentElement;
    const errorDisplay = inputElement.querySelector(".error");

    errorDisplay.innerText = " ";
    inputElement.classList.remove("error");
    inputElement.classList.add("success");
}

const isValidEmail = email => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.ge$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const emailValue = email.value;
  const cityValue = city.value;
  const zipcodeValue = zipcode.value;

  if(emailValue === "") {
    setError(email, "email is required");
  }else if(!isValidEmail(emailValue)){
    setError(email, "provide real email. should end with .ge")
  }else{
    setSuccess(email);
  }

  if(cityValue === "") {
    setError(city, "we need city man");
  }else{
    setSuccess(city);
  }

  if(zipcodeValue === "") {
    setError(zipcode, "zipcode please.");
  }else{
    setSuccess(zipcode);
  }
}