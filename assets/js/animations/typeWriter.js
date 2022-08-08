const typeWritterEffect = (tag, text, delay) => {
    /* For each character of the given text */
    for(let i = 0; i < text.length; i++) {
        writeLetter(i, text, tag, delay);
    }
}

/* Write a character after other, with a given delay between, in the given tag */
function writeLetter (index, text, tag, delay) {
    setTimeout(() => {
        tag.textContent += text[index];
    }, index * delay)
}

/* Aply the type writter effect on the banner */
export const bannerTypeWritterEffect = () => {
    /* Do not load the effect right when the page loads, wait 1500ms */
    setTimeout(() => {
        /* Aply the effect to the tittle */
        const tittleText = "Hello, world!";
        const tittleTextDelay = 100;
        typeWritterEffect(document.querySelector(".banner__tittle"), tittleText, tittleTextDelay);
        /* Wait 600ms after the effect of the tittle is finished */
        setTimeout(() => {
            /* Aply the effect to the content */
            typeWritterEffect(document.querySelector(".banner__content"), "Desarrollo de páginas web Front-End", 50)
        }, tittleText.length * tittleTextDelay + 600);
    }, 1500)
}