const cards = document.querySelector(".cards");

class Extension {
    constructor(logo, title, description) {
      this.logo = logo;
      this.title = title;
      this.description = description;  
    }
}

const devLens = new Extension(
    "logo-devlens.svg", 
    "DevLens", 
    "Quickly inspect page layouts and visualize element boundaries."
);

const styleSpy = new Extension(
    "logo-style-spy.svg",
    "StyleSpy",
    "Instantly analyze and copy CSS from any webpage element."
);

const speedBoost = new Extension(
    "logo-speed-boost.svg",
    "Speed Boost",
    "Optimizes browser resources usage to accelerate page loading."
);

const jsonWizard = new Extension(
    "logo-json-wizard.svg",
    "JSONWizard",
    "Formats, validates, and prettifies JSON responses in-browser"
);

const tabMasterPro = new Extension(
    "logo-tab-master-pro.svg",
    "TabMaster Pro",
    "Organizes browser tabs into groups and sessions."
);

const viewPortBuddy = new Extension(
    "logo-viewport-buddy.svg",
    "ViewportBuddy",
    "Simulates various screen resolutions directly within the browser."
)

const markUpNotes = new Extension(
    "logo-markup-notes.svg",
    "Markup Notes",
    "Enables annotation and notes directly onto webpages for collaborative debugging."
);
const gridGuides = new Extension(
    "logo-grid-guides.svg",
    "Grid Guides",
    "Overlay customizable grids and alignment guides on any webpage."
);
const palettePicker = new Extension(
    "logo-palette-picker.svg",
    "Pallete Picker",
    "Instantly extracts color palettes from any webpage."
);
const linkChecker = new Extension(
    "logo-link-checker.svg",
    "Link Checker",
    "Scan and highlights broken links on any page."
);
const domSnapshot = new Extension(
    "logo-dom-snapshot.svg",
    "Dom Snapshot",
    "Capture and export DOM structures quickly."
);
const consolePlus = new Extension(
    "logo-console-plus.svg",
    "Console Plus",
    "Enhanced developer console with advanced filtering and logging."
);



const extensions = [devLens, styleSpy, speedBoost, jsonWizard, tabMasterPro, viewPortBuddy, markUpNotes, gridGuides, palettePicker, linkChecker, domSnapshot, consolePlus]

extensions.map((ext)=>{
cards.innerHTML += `
    <div class="card">
        <img src="./images/${ext.logo}" class="extensions-list-icon">
        <div class="card-part1">
            <span style="margin-left: 10px;">
                <span class="extension-list-title">${ext.title}</span>
                <span class="extension-list-description">${ext.description}</span>
            </span>
        </div>
        <div class="card-part2">
            <button class="remove-button"><span class="remove-text">Remove<span></button>
            <div class="toggle-container">
                <div class="con">
                    <div class="tog"></div>
                </div>
            </div>        
    </div>
    `
});

const toggleContainer = document.querySelectorAll(".con");
const toggleButton = document.querySelectorAll(".tog");

for (let i = 0; i < toggleContainer.length; i++){
    toggleContainer[i].addEventListener('click', ()=>{
        toggleContainer[i].classList.toggle("con-disabled");
        toggleButton[i].classList.toggle("tog-disabled");
    });

    // Mobile Touch Events
    toggleContainer[i].addEventListener("touch", ()=>{
        toggleContainer[i].classList.toggle("con-disabled");
        toggleButton[i].classList.toggle("tog-disabled");
    });
}

// const intialSelection = document.getElementById("#intial");
// intialSelection.focus();

const app = {
    moon: '<img src="./images/icon-moon.svg" class="theme" alt="Moon">',
    sun: '<img src="./images/icon-sun.svg" class="theme" alt="Sun">',
    logoLight: `./images/logo-light.svg`,
    logoDark: `./images/logo-dark.png`
}

const removeButton = document.querySelectorAll(".remove-button");
let card = document.querySelectorAll(".card");
console.log(card)

for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', ()=>{
        setTimeout(()=>{
            card[i].hidden = "true";
        }, 150)

    })
}
function changeTheme() {
    let theme = document.querySelector(".theme");
    let themeContainer = document.querySelector(".theme-container");
    let body = document.querySelector("body");
    let cards = document.querySelectorAll(".card");
    let header = document.querySelector(".header");
    let removeButton = document.querySelectorAll(".remove-button");
    let navButtons = document.querySelectorAll(".nav-buttons")

    if (theme.alt === "Sun"){
            themeContainer.innerHTML = app.moon;
    } else{

            themeContainer.innerHTML = app.sun;
    }
    themeContainer.classList.toggle("theme-container-light");
    // extensionsLogo.classList.toggle("extensions-logo-icon-light");
    body.classList.toggle("body-light");
    header.classList.toggle("header-light")
    
    for (let eachRemoveButton of removeButton) {
        eachRemoveButton.classList.toggle("remove-button-light")
    }
    for (let eachCard of cards) {
        eachCard.classList.toggle("card-light");
    }

    for (let eachNavButton of navButtons){
        eachNavButton.classList.toggle("nav-buttons-light")
    }
}

function filterAll(){
    document.querySelector(".all").classList.add("filter");
    console.log("Displaying All Extension")


    // filterAllContainer.innerHTML="";
    // filterActiveContainer.innerHTML="";
    // let allCards = document.querySelectorAll("div.card");

    // allCards.forEach((ext)=>{
    //     const clone = ext.cloneNode(true);
    //     filterAllContainer.appendChild(clone);
    // })
        
    // toggleAction(allCards);
    document.querySelector(".active").classList.remove("filter");
    document.querySelector(".inactive").classList.remove("filter");
}

// Filter All On Document Load
document.addEventListener('DOMContentLoaded', filterAll);

function filterActive(){
    document.querySelector(".active").classList.add("filter");
    console.log("Displaying Active Extension")
    
    // filterAllContainer.innerHTML="";
    // filterActiveContainer.innerHTML="";
    // let allExtensions = document.querySelectorAll("div.active,  div.card");

    // let activeExtensions = Array.from(allExtensions).filter((ext)=>{
    //     return ext.classList.contains('active');
    // })


    // activeExtensions.forEach((ext)=>{
    //     const clone = ext.cloneNode(true);
    //     filterActiveContainer.appendChild(clone);
    // });
    
    // toggleAction(activeExtensions);
    document.querySelector(".all").classList.remove("filter");
    document.querySelector(".inactive").classList.remove("filter");
}

function filterInactive(){
    document.querySelector(".inactive").classList.add("filter");
    console.log("Displaying Inactive Extensions")

    document.querySelector(".all").classList.remove("filter");
    document.querySelector(".active").classList.remove("filter");
}