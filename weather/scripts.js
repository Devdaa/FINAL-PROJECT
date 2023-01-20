const content = document.getElementById("mainContent");
const dropdownButton = document.getElementById("dropdownButton");
const addBtn = document.querySelector(".addBtn");
const editBtn = document.querySelector(".editBtn");
const cardHeader = document.getElementById("area");
const cardText = document.querySelector(".card-text");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const removeButton = document.querySelector(".removeBtn");
const editingArea = document.querySelector(".editingArea");

//dropdown

dropdownButton.addEventListener("click", e => {
    e.preventDefault();

    dropdown();
});
function dropdown(){
    let dropdownContent = document.querySelector(".dropdown-content");
    if(dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    }else{
        dropdownContent.style.display = "none";
    }
}

//edit button eventListener
const editInput = document.createElement("input");
editInput.setAttribute("type", "text");
editInput.classList.add("editInput");
editInput.style.display = "none";
const editInputButton = document.createElement("button");
editInputButton.setAttribute("type", "submit");
editInputButton.classList.add("editInputButton");
editInputButton.innerText = "edit";
editInputButton.style.display = "none";
editingArea.appendChild(editInput);
editingArea.appendChild(editInputButton);

editBtn.addEventListener("click", function() {
    if (cardHeader.style.display === "none") {
        cardHeader.style.display = "block";
        editInput.style.display = "none";
        editInputButton.style.display = "none";
    }else{
        editInput.setAttribute("value", cardHeader.innerText);
        cardHeader.style.display = "none";
        editInput.style.display = "block";
        editInputButton.style.display = "block";
        activateButton();
    }
});

//add new location button eventListener
const addButton = document.createElement("button");
addButton.innerText = ("Add");
addButton.classList.add("addConfirm");
addButton.type="submit";

addBtn.addEventListener("click", function() {
    let inputField = document.querySelector('.inputField');
    if (inputField) {
        inputField.remove();
        addButton.remove();
    } else {
        let addButtonDiv = document.querySelector('.inputFieldForLocation');
        let addButtonDiv2= document.querySelector(".inputFieldButton");
        inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.classList.add("inputField");
        addButtonDiv.appendChild(inputField);
        addButtonDiv2.appendChild(addButton);
    }
});

//weather api



let cityID;
addButton.addEventListener("click", function(){
    cityID = document.querySelector(".inputField").value;
    weatherBalloon(cityID);
    if(card1.style.display == "none") {
        card1.style.display = "block";
    }
});

const tempSpan = document.createElement("span");
tempSpan.classList.add("celcius");
tempSpan.innerText="°c";
//default card

//date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var dayName = today.toLocaleString('default', { weekday: 'long' });
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
today = dayName + ' ' + mm + '/' + dd + '/' + yyyy;
document.getElementById('date').innerHTML = today;
//default info
const defaultLink ="https://api.openweathermap.org/data/2.5/weather?q=bucharest&units=metric&appid=6140405f434430e94059ed658e99448d";
fetch(defaultLink)
.then(function(resp) { return resp.json() })
.then(function(data) { 
    if(data.cod === "404"){
        document.getElementById('area').innerHTML = "City not found";
        return;
    }
    drawWeather(data); 
}).catch(function() { 
    document.getElementById('area').innerHTML = "Unable to connect to the server";
});


//edit card info
function activateButton(){
    editInputButton.addEventListener("click", function(){
        cityID = document.querySelector(".editInput").value;
        weatherBalloon(cityID);
        editInput.style.display = "none";
        editInputButton.style.display = "none";
        cardHeader.style.display = "block";
        console.log(cityID);
    })
};
  

//change card info
function weatherBalloon( cityID ) { 
    const changedLink ="https://api.openweathermap.org/data/2.5/weather?q=" + cityID + "&units=metric&appid=6140405f434430e94059ed658e99448d";
    fetch(changedLink)
    .then(function(resp) { return resp.json() })
    .then(function(data) { 
        if(data.cod === "404"){
            document.getElementById('area').innerHTML = "City not found";
            return;
        }
        drawWeather(data);
    }).catch(function() { 
        document.getElementById('area').innerHTML = "Unable to connect to the server";
    });
}
 
  
function drawWeather(data) {
    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('temp').innerHTML = data.main.temp;
    document.getElementById('temp').appendChild(tempSpan);
    document.getElementById('area').innerHTML = data.name;
    document.getElementById('visibility').innerHTML = data.visibility;
    document.getElementById('humidity').innerHTML = data.main.humidity;
    document.getElementById('wind-speed').innerHTML = data.wind.speed;
    document.getElementById('feelslike').innerHTML = data.main.feels_like + '&deg;';
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const weatherIcon = document.createElement('img');
    weatherIcon.src = iconUrl;
    const weatherIconContainer = document.querySelector('.icon-for-weather');
    weatherIconContainer.appendChild(weatherIcon);
    if(weatherIconContainer.childNodes.length > 0){
        weatherIconContainer.removeChild(weatherIconContainer.childNodes[0]);
        weatherIconContainer.appendChild(weatherIcon);
    }else{
        weatherIconContainer.appendChild(weatherIcon);
    }
    
}

removeButton.addEventListener("click", function(){
    card1.style.display = "none";
})