const inputBoxes = document.querySelectorAll(".contact__form__input");

inputBoxes.forEach(inputBox => {
    inputBox.addEventListener("blur", input => {
        validate(input.target);
    });
})


function validate(input) {
    const inputType = input.dataset.type;
    if(customErrors[inputType]) {
        customErrors[inputType](input);
    }
    console.log(input.validity)
    if(input.validity.valid) {
        input.parentElement.classList.remove("contact__form__input-container-invalid");
        input.parentElement.querySelector(".contact__form__input-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("contact__form__input-container-invalid");
        input.parentElement.querySelector(".contact__form__input-error").innerHTML = showError(inputType, input);
    }
}

const errorMessages = {
    name: {
        valueMissing: "Por favor, ingrese su nombre",
        patternMismatch: "Solo se permiten un maximo de 50 letras con o sin acento. No se admiten caracteres especiales",
    },
    email: {
        valueMissing: "Por favor, ingrese su mail",
        patternMismatch: "El correo ingresado no es valido",
    },
    subject: {
        valueMissing: "Por favor, ingrese el asunto de su mensaje",
        patternMismatch: "Solo se permiten un maximo de 50 caracteres",
    },
    message: {
        valueMissing: "Por favor, ingrese su mensaje",
        customError: "Solo se permiten un maximo de 300 caracteres",
    }
}

const customErrors = {
    message: textarea => setTextareaCustomError(textarea),
}

const inputErrorTypes = [
    "valueMissing",
    "patternMismatch",
    "customError",
];

function showError (inputType, input) {
    let message = "Ha ocurrido un error";
    inputErrorTypes.forEach(error => {
        if(input.validity[error]) {
            message = errorMessages[inputType][error];
        }
    })
    return message;
}

function setTextareaCustomError(textarea) {
    let message = ""
    const regEx = /^.{1,300}$/
    if(!regEx.test(textarea.value) && textarea.value.length > 0) {
        message = errorMessages["message"]["customError"];
        console.log(message);
    }
    textarea.setCustomValidity(message);
}