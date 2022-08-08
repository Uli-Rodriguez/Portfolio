import { throttle } from "./throttle.js";

/* Select the first section to be visible on the screen (the banner) and the nav bar */
const banner = document .querySelector(".banner");
const navBar = document.querySelector(".headerContainer");

/* Check if the nav bar should be transparent or solid, also add a limit on the calls of this function */
export const shouldSolidNav = throttle(() => {
    navBar.classList.toggle("solid-nav", (banner.getBoundingClientRect().bottom < window.innerHeight));
})

export const fadeNavBar = () => {
    setTimeout(() => {
        navBar.classList.add("fade-down-active");
    },100);
}