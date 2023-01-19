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
                h5_3.textContent = h4.textContent;
                h4.textContent = "On the skyline";
                break;
        }
    }, 500);
}

let counter = 0;

upButton.addEventListener("click", function(){
    counter--;
    if(counter < 0) counter = 3;
    animate();
    switch(counter){
        case 2:
            p1.innerHTML = "03";
            p2.innerHTML = "Another different paragraph";
            h5_1.textContent = h4.textContent;
            h4.textContent = "Pityful a rethoric";
            break;
        case 1:
            p1.innerHTML = "02";
            p2.innerHTML = "A different paragraph";
            h5_2.textContent = h4.textContent;
            h4.textContent = "On the skyline";
            break;
        case 0:
            p1.innerHTML = "01";
            p2.innerHTML = "She packed her seven versalia, put her initial into<br>the belt and made herself on the way. When she <br> reached the first hills of the Italic";
            h5_3.textContent = h4.textContent;
            h4.textContent = "Last view back";
            break;
    }
});

downButton.addEventListener("click", function(){
    if(p1.innerHTML === "04") counter = -1;
    counter++;
    if(counter > 3) counter = 0;
    animate();
    switch(counter){
        case 1:
            p1.innerHTML = "02";
            p2.innerHTML = "A different paragraph";
            h5_3.textContent = h4.textContent;
            h4.textContent = "On the skyline";
            break;
        case 2:
            p1.innerHTML = "03";
            p2.innerHTML = "Another different paragraph";
            h5_2.textContent = h4.textContent;
            h4.textContent = "Pityful a rethoric";
            break;
        case 3:
            p1.innerHTML = "04";
            p2.innerHTML = "Yet another different paragraph";
            h5_1.textContent = h4.textContent;
            h4.textContent = "On her way she";
            break;
    }
});

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