import { throttle } from "./throttle.js";

/*---------- Active nav bar item ----------*/
const navBar = document.querySelector(".headerContainer");
const sections = [
    {
        navItem: document.querySelector("#navAboutMe"),
        sectionItem: document.querySelector("#aboutMe")        
    },
    {
        navItem: document.querySelector("#navSkills"),
        sectionItem: document.querySelector("#skills")        
    },
    {
        navItem: document.querySelector("#navHobbies"),
        sectionItem: document.querySelector("#hobbies")        
    },
    {
        navItem: document.querySelector("#navStudies"),
        sectionItem: document.querySelector("#studies")        
    },
    {
        navItem: document.querySelector("#navCodingExp"),
        sectionItem: document.querySelector("#codingExp")        
    },
    {
        navItem: document.querySelector("#navContactMe"),
        sectionItem: document.querySelector("#contactMe")        
    }
];

/* Check if each section is visible */

function sectionActive () {
    sections.forEach((element) => {
        const thisSectionTopBorder = element.sectionItem.getBoundingClientRect().top;
        const thisSectionBottomBorder = element.sectionItem.getBoundingClientRect().bottom;
        if(thisSectionTopBorder <= navBar.offsetHeight && thisSectionBottomBorder >= navBar.offsetHeight) {
            element.navItem.classList.add("item-active");
        }
        else {
            element.navItem.classList.remove("item-active");
        }
    })
}

/* Add a limit of calls per second to check if a section is visible */
export const checkCurrentSection = throttle(() => {
    sectionActive();
})