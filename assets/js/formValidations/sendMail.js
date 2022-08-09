/* Get the contact form */
const form = document.querySelector(".contact__form");

/* When the form is submited */
export const sendMail = () => {
    form.addEventListener("submit", async submitForm => {
        submitForm.preventDefault();
        /* Get the loading gif when we send the request */
        const loadingForm = document.querySelector(".contact__container__loading");
        form.classList.add("loading__form-active");
        loadingForm.classList.add("loading-active");
        
        /* Try sending the request */
        try {
            const sendMailRequest = await fetch("https://formsubmit.co/ajax/uli.mati.ro@gmail.com", {
                method: "POST",
                body: new FormData(submitForm.target),
            })
            
            /* Remove the loading gif */
            form.classList.remove("loading__form-active");
            loadingForm.classList.remove("loading-active");
            form.reset();
            
            /* If we could make the request, notify the user */
            if (sendMailRequest.ok)
            {
                Swal.fire ({
                    title: `<h2 class="tittle-font">¡Muchas gracias por su mensaje!</h2>`,
                    html: `<p class="plain-text-font">Su mensaje ha sido enviado con exito, me pondre en contacto con usted lo antes posible</p>`,
                    icon: "success",
                    confirmButtonText: "Entendido",
                    background: "#000e14",
                    color: "#C3CEDA",
                    customClass: {
                        popup: "sweetAlert__container",
                        content: "sweetAlert__content",
                        confirmButton: "sweetAlert__confirm-button"
                    },
                    confirmButtonColor: "#0C4160"
                })
            } else {
                /* Throw generic error if we don´t succed */
                throw new Error("Ha ocurrido un error al enviar el mail, intente nuevamente")
            }
        } catch (error) {
            /* Remove the loading gif */
            form.classList.remove("loading__form-active");
            loadingForm.classList.remove("loading-active");
            form.reset();

            /* Notify the user we had an error */
            Swal.fire ({
                title: `<h2 class="tittle-font">Lo sentimos</h2>`,
                html: `<p class="plain-text-font">Ha ocurrido un error: ${error}</p>`,
                icon: "error",
                confirmButtonText: "Entendido",
                background: "#000e14",
                color: "#C3CEDA",
                customClass: {
                    popup: "sweetAlert__container",
                    content: "sweetAlert__content",
                    confirmButton: "sweetAlert__confirm-button"
                },
                confirmButtonColor: "#0C4160"
            })
        }
            
    })
}