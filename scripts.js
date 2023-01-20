//button smooth scroll
function scrollToAboutUs() {
    const aboutUs = document.getElementById("aboutUs");
    aboutUs.scrollIntoView({ behavior: "smooth" });
}
const upButton = document.querySelector(".changeP-buttonUp");
const downButton = document.querySelector(".changeP-buttonDown")
const h4 = document.getElementById("h4");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const h5_1 = document.getElementById("h5-1");
const h5_2 = document.getElementById("h5-2");
const h5_3 = document.getElementById("h5-3");

//switch contents
function animate() {
    p1.classList.add("animate");
    p2.classList.add("animate");
    h4.classList.add("animate");
    h5_1.classList.add("animate");
    setTimeout(() => {
        switch(counter){
            case 1:
                p1.innerHTML = "02";
                p2.innerHTML = "A different paragraph";
                h4.textContent = "On the skyline";
                h5_1.textContent = "Pityful a rethoric"
                h5_2.textContent = "On her way she"
                h5_3.textContent = "Last view back";
                break;
        }
    }, 500);
}

let counter = 0;

function resetContent() {
    p1.innerHTML = "01";
    p2.innerHTML = "She packed her seven versalia, put her initial into<br>the belt and made herself on the way. When she <br> reached the first hills of the Italic";
    h4.textContent = "Last view back";
    h5_1.textContent = "On the skyline"
    h5_2.textContent = "Pityful a rethoric"
    h5_3.textContent = "On her way she";
}

downButton.addEventListener("click", function(){
    if(p1.innerHTML === "04") {
        counter = -1;
        resetContent();
    }
    counter++;
    if(counter > 3) counter = 0;
    animate();
    switch(counter){
        case 1:
            p1.innerHTML = "02";
            p2.innerHTML = "A different paragraph";
            h4.textContent = "On the skyline";
            h5_1.textContent = "Pityful a rethoric"
            h5_2.textContent = "On her way she"
            h5_3.textContent = "Last view back";
            break;
        case 2:
            p1.innerHTML = "03";
            p2.innerHTML = "Another different paragraph";
            h4.textContent = "Pityful a rethoric";
            h5_1.textContent = "On her way she"
            h5_2.textContent = "Last view back"
            h5_3.textContent = "On the skyline";
            break;
        case 3:
            p1.innerHTML = "04";
            p2.innerHTML = "Yet another different paragraph";
            h4.textContent = "On her way she";
            h5_1.textContent = "Last view back"
            h5_2.textContent = "On the skyline"
            h5_3.textContent = "Pityful a rethoric";
            break;
    }
});

upButton.addEventListener("click", function(){
    counter--;
    if(counter < 0) {
        counter = 3;
        p1.innerHTML = "04";
    }
    if(p1.innerHTML === "01") {
        counter = 3;
        resetContent();
    }
    animate();
    switch(counter){
        case 2:
            p1.innerHTML = "03";
            p2.innerHTML = "Another different paragraph";
            h4.textContent = "Pityful a rethoric";
            h5_1.textContent = "On her way she"
            h5_2.textContent = "Last view back"
            h5_3.textContent = "On the skyline";
            break;
        case 1:
            p1.innerHTML = "02";
            p2.innerHTML = "A different paragraph";
            h4.textContent = "On the skyline";
            h5_1.textContent = "Pityful a rethoric"
            h5_2.textContent = "On her way she"
            h5_3.textContent = "Last view back";
            break;
        case 0:
            resetContent();
            break;
    }
});

//video
let btn = document.querySelector('.our-video-btn');
let video = document.querySelector('.bg-video');
let description = document.querySelector('.description-for-video');

video.muted = true;
video.play();

btn.addEventListener('click', function() {
    if(video.muted){
        video.style.filter = 'none';
        video.muted = false;
        video.pause();
        video.currentTime = 0;
        video.play();
        description.style.zIndex= "-1"
    }else{
        video.muted=true;
        video.style.filter = "blur(5px)";
        description.style.zIndex = "1"
    }
});


//smooth acnhor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//reviews
let currentCard = 0;
let cards = document.querySelectorAll('.card6');

function highlightCard() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('highlighted');
        cards[i].style.backgroundColor = "#FFFFFF";
    }
    cards[currentCard].classList.add('highlighted');
    cards[currentCard].style.backgroundColor = "#9EAD8D";
}
function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    highlightCard();
}
setInterval(nextCard, 3000);

//baker buttons
const bakerUp = document.querySelector(".baker-changeP-buttonUp");
const bakerDown = document.querySelector(".baker-changeP-buttonDown")
const b_h4 = document.getElementById("baker-h4");
const bakerP = document.getElementById("baker-p2");
const b_h5_1 = document.getElementById("baker-h5");
const b_h5_2 = document.getElementById("baker-h5_2");


const bakers = [
    {b_h4: "Stina Gunnarsdottir", bakerP: "She packed her seven versalia, put her initial into<br> the belt and made herself on the way."},
    {b_h4: "Jaquon Hart", bakerP: "he is the best, puts his golden hands on bread<br>and makes it into gold like midas."},
    {b_h4: "Oluchi Mazi", bakerP: "wow, just wow, he is the king<br>makes bakery look so ez like WOW!"}
];

let counter2 = 0;

bakerUp.addEventListener('click', rotateUp);
bakerDown.addEventListener('click', rotateDown);

function rotateUp() {
    counter2--;
    if (counter2 < 0) {
        counter2 = bakers.length - 1;
    }
    b_h4.innerHTML = bakers[counter2].b_h4;
    bakerP.innerHTML = bakers[counter2].bakerP;
}

function rotateDown() {
    counter2++;
    if (counter2 >= bakers.length) {
        counter2 = 0;
    }
    b_h4.innerHTML = bakers[counter].b_h4;
    bakerP.innerHTML = bakers[counter].bakerP;
}
