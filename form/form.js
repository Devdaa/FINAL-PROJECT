const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const city = document.getElementById("city");
const zipcode = document.getElementById("zipcode");
const wrapper = document.querySelector(".wrapper");
const headerText = document.querySelector(".signUp-text");
const headerDescription = document.querySelector(".signUp-description");
const topOfForm = document.querySelector(".topOfForm");
const input = document.querySelector("input");


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

const check = document.getElementById("checkbox");

check.addEventListener("change", function(){
  if(this.checked){
    wrapper.style.backgroundColor = "white";
    headerText.style.color = "black";
    headerDescription.style.color = "#748AA1";
    form.style.backgroundColor = "white"
    form.style.boxShadow = "box-shadow: 0px 1px 4px #E5E9F2;"
    topOfForm.style.backgroundColor = "white";
    email.style.backgroundColor = "white";
    zipcode.style.backgroundColor = "white";
    city.style.backgroundColor = "white";
    select.style.backgroundColor = "white";
    email.style.color = "black";
    zipcode.style.color = "black";
    city.style.color = "black";
    select.style.color = "black";
  }else{
    wrapper.style.backgroundColor = "#1f2327";
    headerText.style.color = "white";
    headerDescription.style.color = "#748AA1";
    form.style.backgroundColor = "#292E33";
    form.style.boxShadow = "box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2)"
    topOfForm.style.backgroundColor = "#292E33";
    email.style.backgroundColor = "#292E33";
    zipcode.style.backgroundColor = "#292E33";
    city.style.backgroundColor = "#292E33";
    select.style.backgroundColor = "#292E33";
    email.style.color = "white";
    zipcode.style.color = "white";
    city.style.color = "white";
    select.style.color = "white";
  }
})