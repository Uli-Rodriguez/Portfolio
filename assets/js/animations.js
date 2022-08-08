import { addFadeActive } from "./animations/sectionsFade.js";
import { checkCurrentSection } from "./animations/navSections.js";
import {fadeNavBar} from "./animations/solidNavBar.js";
import {shouldSolidNav} from "./animations/solidNavBar.js";
import {bannerTypeWritterEffect} from "./animations/typeWriter.js";

/* Aply animations and effects based on the scroll */
window.addEventListener("scroll", () => {
    /* Transparent / Solid nav bar effect */
    shouldSolidNav();
    /* Nav underline current section effect */
    checkCurrentSection();
    /* Fade animation when load */
    addFadeActive();
});

/* Fade animation on nav bar when load page */
fadeNavBar();

/* Type writter effect in the banner when load page */
bannerTypeWritterEffect();