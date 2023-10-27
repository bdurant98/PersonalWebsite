/*
All variables to get the DOM elements on the form
*/
const form = document.querySelector('.contact-form');
const fNameInput = document.getElementById('fname-input');
const lNameInput = document.getElementById('lname-input');
const email = document.getElementById('email-input');
const subject = document.getElementById('subject-input');
const formMsg = document.getElementById('message-input');
const formSubmit = document.getElementById('submit-btn');
const formConfirmMsg = document.getElementById('form-confirm-msg');

/* 
Get IDs of elements to store them and place the inputs into a single object
*/

const fNameInputId = fNameInput.id;
const lNameInputId = lNameInput.id;
const emailId = email.id;
const subjectId = subject.id;
const formMsgId = formMsg.id;

/**
 * Object to contain the data values from the input and to make sure that all values are filled
 */
const formInputs = {
    [fNameInputId]: {
        notEmpty: false,
        sanitizedValue: ''
    },
    [lNameInputId]: {
        notEmpty: false,
        sanitizedValue: ''
    },
    [emailId]: {
        notEmpty: false,
        sanitizedValue: ''
    },
    [subjectId]: {
        notEmpty: false,
        sanitizedValue: ''
    },
    [formMsgId]: {
        notEmpty: false,
        sanitizedValue: ''
    }
}
/**
 * This method will handle output a message for the user about what is wrong with their input.
 * @param {InputEvent} input the input event that is found to be invalid upon user input
 * @param {string} msg for the message to be shown the user when invalid input is entered.
 */
// const setInputInvalidState = (input, msg) => {
//     console.log('input invalid!');
//     input.nextElementSibling.style.display = 'block';
//     input.nextElementSibling.innerText = msg;
// }

/**
 * SetInputValidState:
 * This method handles removing invalid messages from input fields
 * @param {InputEvent} input input event that the user has valid input in 
 */
// const setInputValidState = (input) => {
//     input.nextElementSibling.style.display = 'none';
//     input.nextElementSibling.innerText = '';
// }

/**
 * checkInput checks in the input of the user by passing it to the runValidation method.
 * The values returned are then used to change the invalid state to a valid state.
 * @param {InputEvent} input input event from the user to be checked for validity
 * @returns returns boolean value of whether or not the input is valid or not. 
 */
const checkInput = (input) => {
    const validation = runValidation(input);
    let id = input.getAttribute('id');

    if (!validation.valid) {
        console.log('input invalid!');
        // setInputInvalidState(input, validation.msg);
        formInputs[id].notEmpty = false;
        return false;
    } else {
        // setInputValidState(input);
        formInputs[id].notEmpty = true;
        return true;
    }
}

/**
 * runValidation checks the input to see if the field is valid.
 * @param {InputEvent} input Input event passed to the function to be checked 
 * @returns an object with two key value pairs with a valid boolean and a message if the valid key has a value of false.
 */
const runValidation = (input) => {
    console.log("run validation!");
    const stringInput = input.toString();
    if(!validator.isEmpty(stringInput)) {
        console.log('validator checked for full');
        return {
            valid: true,
            msg: null
        }
    } else {
        if (validator.isEmpty(stringInput)) {
            console.log('validator found empty');
            return {
                valid: false,
                msg: 'Required'
            }
        } else {
            return {
                valid: false,
                msg: 'Input Invalid'
            }
        }
    }
}


/**
 * enableSubmitIfInputsValid is a void function to be called when all input is filled.
 * It checks inputs one last time to see if the inputs are empty and removes the disabled attribute from the submit button
 */
const enableSubmitIfInputsValid = () => {
    const allInputsValid = Object.keys(formInputs).every((input) => formInputs[input].notEmpty === true);
    if (allInputsValid) {
        formSubmit.removeAttribute('disabled');
    } else {
        formSubmit.setAttribute('disabled', '');
    }
}

/**
 * handleFieldBlur will convert the input to a safe value to be placed into the form.
 * @param {InputEvent} input is the value from a blurred event that is passed to the function 
 */
const handleFieldBlur = (input) => {
    const stringInput = input.toString();
    if (checkInput(input)) {
        const sanitizedValue = DOMPurify.sanitize(stringInput.value);
        const trimmedValue = validator.trim(sanitizedValue);
        const escapedValue = validator.escape(trimmedValue);

        formInputs[input.id].sanitizedValue = escapedValue;
        enableSubmitIfInputsValid();
    }
}

const handleFieldInput = (input) => {
    if (checkInput(input)) {
        enableSubmitIfInputsValid();
    }
}

handleSubmit = (e) => {
    e.preventDefault();
    form.reset();
    formConfirmMsg.style.display = 'block';
    console.log("form submitted");
}

    fNameInput.addEventListener('focus', (e) => handleFieldInput(e.target));
    fNameInput.addEventListener('blur', (e) => handleFieldBlur(e.target));

    lNameInput.addEventListener('focus', (e) => handleFieldInput(e.target));
    lNameInput.addEventListener('blur', (e) => handleFieldBlur(e.target));

    email.addEventListener('focus', (e) => handleFieldInput(e.target));
    email.addEventListener('blur', (e) => handleFieldBlur(e.target));

    subject.addEventListener('focus', (e) => handleFieldInput(e.target));
    subject.addEventListener('blur', (e) => handleFieldBlur(e.target));

    formMsg.addEventListener('focus', (e) => handleFieldInput(e.target));
    formMsg.addEventListener('blur', (e) => handleFieldBlur(e.target));

    formSubmit.addEventListener('click', (e) => handleSubmit(e));