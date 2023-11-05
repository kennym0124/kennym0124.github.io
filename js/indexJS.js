let scrollDownButton = document.getElementById('scroll-downButton');
let aboutMeButton = document.getElementById('aboutMeButton');
let projectsButton = document.getElementById("projectsButton")
let resumeButton = document.getElementById("resumeButton");
let contactMeButton = document.getElementById("contactMeButton");
let logo = document.getElementById('logo');
let infoButtons = document.querySelectorAll(".subInfoButton");
let hiddenRight = document.querySelectorAll(".hiddenRight");
let hiddenLeft = document.querySelectorAll(".hiddenLeft");


const fadeRightObserver = new IntersectionObserver((hiddenElements) => {
    console.log(hiddenElements);
    hiddenElements.forEach((hiddenElement) => {
        hiddenElement.target.classList.toggle("showRight", hiddenElement.isIntersecting);
    })
})

const fadeLeftObserver = new IntersectionObserver((hiddenElements) => {
    console.log(hiddenElements);
    hiddenElements.forEach((hiddenElement) => {
        hiddenElement.target.classList.toggle("showLeft", hiddenElement.isIntersecting);
    })
})


hiddenRight.forEach((hiddenElement) => fadeRightObserver.observe(hiddenElement));
hiddenLeft.forEach((hiddenElement) => fadeLeftObserver.observe(hiddenElement));

logo.addEventListener("click", () => {
    document.getElementById('section1').scrollIntoView();
})
scrollDownButton.addEventListener("click", () => {
    document.getElementById('section2').scrollIntoView();
})
aboutMeButton.addEventListener("click", () => {
    document.getElementById('section2').scrollIntoView();
})
projectsButton.addEventListener("click", () => {
    document.getElementById('section3').scrollIntoView();
})
resumeButton.addEventListener("click", () => {
    document.getElementById('section4').scrollIntoView();
})
contactMeButton.addEventListener("click", () => {
    document.getElementById('section5').scrollIntoView();
})
infoButtons.forEach((infoButton) => {
    infoButton.addEventListener("click", () => {
        openInfoTab(infoButton.id);
    })
})


function openInfoTab(tabname){
    let infoTabs = document.getElementsByClassName("subInformation");

    for(infoTab of infoTabs){
        infoTab.classList.remove("active");
        if(tabname + "2" === infoTab.id){
            infoTab.classList.add("active");
        }
    } 
}