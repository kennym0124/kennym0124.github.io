let scrollDownButton = document.getElementById('scroll-downButton');
let aboutMeButton = document.getElementById('aboutMeButton');
let logo = document.getElementById('logo');

logo.addEventListener("click", () => {
    document.getElementById('section1').scrollIntoView();
})
scrollDownButton.addEventListener("click", () => {
    document.getElementById('section2').scrollIntoView();
})
aboutMeButton.addEventListener("click", () => {
    document.getElementById('section2').scrollIntoView();
})
