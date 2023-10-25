/*
All variables to get the DOM elements on the form
*/
const form = document.getElementById('contact-form');
const fNameInput = document.getElementById('fname-input');
const lNameInput = document.getElementById('lname-input');
const email = document.getElementById('email-input');
const subject = document.getElementById('subject-input');
const formMsg = document.getElementById('message-input');
const formSubmit = document.getElementById('submit-btn');
const formReset = document.getElementById('reset-btn');

/* 
Get IDs of elements to store them and place the inputs into a single object
*/

const fnameInputId = fnameInput.id;
const lNameInputId = lNameInput.id;
const emailId = email.id;
const subjectId = subject.id;
const formMsgId = formMsg.id;

/**
 * Object to contain the data values from the input and to make sure that all values are filled
 */
const formInputs = {
    [fnameInputId]: {
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

