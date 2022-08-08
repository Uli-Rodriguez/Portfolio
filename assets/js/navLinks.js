/* Get every link on the bar */
const navItemsLinks = [
    [document.getElementById("navMainMenuContainer"), "#mainMenu"],
    [document.getElementById("navAboutMeContainer"), "#aboutMe"],
    [document.getElementById("navSkillsContainer"), "#skills"],
    [document.getElementById("navHobbiesContainer"), "#hobbies"],
    [document.getElementById("navStudiesContainer"), "#studies"],
    [document.getElementById("navCodingExpContainer"), "#codingExp"],
    [document.getElementById("navContactMeContainer"), "#contactMe"],
]

/* Asign to every item their link */

navItemsLinks.forEach(item =>{
    item[0].addEventListener("click", () => {
        window.location.href = item[1];
    })
})

/*---------- Burger menu ----------*/

const burgerMenu = document.querySelector(".burger-menu");
const menuList = document.querySelector(".menu__list");

burgerMenu.addEventListener("click", () => {
    menuList.classList.toggle("menu__list-active")
})