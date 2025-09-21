// Extension Cards Container
const cards = document.querySelector(".cards");


// Extensions Cards
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


// Extension Cards
const extensions = [devLens, styleSpy, speedBoost, jsonWizard, tabMasterPro, viewPortBuddy, markUpNotes, gridGuides, palettePicker, linkChecker, domSnapshot, consolePlus]

extensions.map((ext)=>{
cards.innerHTML += `
    <div class="card active">
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


// Remove Button Action
const removeButton = document.querySelectorAll(".remove-button");
let card = document.querySelectorAll(".card");
console.log(card)

for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', ()=>{
        setTimeout(()=>{
            cards.removeChild(card[i]);
        }, 150);
    });
}

// Theme Icons
const app = {
    moon: '<img src="./images/icon-moon.svg" class="theme" alt="Moon">',
    sun: '<img src="./images/icon-sun.svg" class="theme" alt="Sun">',
    logoLight: `./images/logo-light.svg`,
    logoDark: `./images/logo-dark.png`
}

function changeTheme() {
    // Target all changes to theme
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

// Toggle Button Action
const toggleContainer = document.querySelectorAll(".con");
toggleContainer.forEach((toggle)=>{

    // Selects the closest tog
    let toggleButton = toggle.querySelector(".tog");      // This time not select all

    toggle.addEventListener('click', (event)=>{
        
        // Toggle Switching Styles
        toggle.classList.toggle("con-disabled");
        toggleButton.classList.toggle("tog-disabled");
    
        // Targets the Closest Extension and sets it as active or inactive
        const targetExtension = event.target.closest('.card');
        if (targetExtension){
            targetExtension.classList.toggle('active');
            targetExtension.classList.toggle('inactive')

            setTimeout(()=>{
                targetExtension.style.display = 'none';
            }, 350)
        }

    })
});


// Filtering...

// Filter All
function filterAll(){
    
    let allExtensions = document.querySelectorAll("div.card");
    allExtensions.forEach((ext)=>{
        ext.style.display = 'block';
    })
    
    // Applying Styles
    document.querySelector(".all").classList.add("filter");
    document.querySelector(".active").classList.remove("filter");
    document.querySelector(".inactive").classList.remove("filter");

    // Log Message
    console.log("Displaying All Extension")
}

// Filter All soon as webpage loads
document.addEventListener('DOMContentLoaded', filterAll);

// Filter Active
function filterActive(){
    let allExtensions = document.querySelectorAll('div.card');
    
    allExtensions.forEach((ext)=>{
        if (!ext.classList.contains('active')){
            ext.style.display = 'none';
        } else {
            ext.style.display = 'block';
        }
    })
    
    
    // Applying Styles
    document.querySelector(".active").classList.add("filter");
    document.querySelector(".all").classList.remove("filter");
    document.querySelector(".inactive").classList.remove("filter");
    
    // Log Message
    console.log("Displaying Active Extension");
}


// Filter Inactive
function filterInactive(){
    let allExtensions = document.querySelectorAll('div.card');
    
    allExtensions.forEach((ext)=>{
        if (!ext.classList.contains('inactive')){
            ext.style.display = 'none';
        } else {
            ext.style.display = 'block';
        }
    })

    // Applying Styles
    document.querySelector(".inactive").classList.add("filter");
    document.querySelector(".all").classList.remove("filter");
    document.querySelector(".active").classList.remove("filter");

    // Log Message
    console.log("Displaying Inactive Extensions");
}
