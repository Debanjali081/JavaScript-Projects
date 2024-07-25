

function getRandomColor() {
    let numColor = "ABCDEF0123456789";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += numColor[randomIndex]
    }
    console.log(color);
    return color;


}

getRandomColor();


let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg"
];

let currentIndex = 0;
let intervalId;
let slideshow = document.getElementById("slideshow");

document.getElementById("start").addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            document.body.style.backgroundColor = getRandomColor();
            slideshow.src = images[currentIndex]
        }, 300);
    }
});

document.getElementById("stop").addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
})
