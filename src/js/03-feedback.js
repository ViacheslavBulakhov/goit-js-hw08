import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
    inputMail:document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}
const { form, textarea, inputMail } = refs;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

let savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

function onFormSubmit (e) {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {

        formData[e.target.name] = e.target.value;

        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function writeTextForm() {

    if (savedText) {
        textarea.value = savedText.message;
        inputMail.value = savedText.email;
    }
}
writeTextForm()