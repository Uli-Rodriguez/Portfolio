import { throttle } from "./throttle.js";

/* Get each section based on their fade */
const fadeLeftContainers = document.querySelectorAll(".fade-left");
const fadeRightContainers = document.querySelectorAll(".fade-right");
const fadeUpContainers = document.querySelectorAll(".fade-up");

/* Check if we need to make a section visible (add animation) */
function shouldFade (fadeContainers, fadeDirection) {
    fadeContainers.forEach(container => {
        if(container.getBoundingClientRect().top <= window.innerHeight * 7/8)
        {
            container.classList.add(fadeDirection);
        }
    });
}

/* Limit the calls per second for checking if a section need to be visible */
export const addFadeActive = () => {
    throttle(shouldFade(fadeLeftContainers, "fade-left-active"));
    throttle(shouldFade(fadeRightContainers, "fade-right-active"));
    throttle(shouldFade(fadeUpContainers, "fade-up-active"));
}