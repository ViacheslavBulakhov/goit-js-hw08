import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
    inputMail:document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}
const { form, textarea, inputMail } = refs;

form.addEventListener('submit', onFormSubmit);
inputMail.addEventListener('input', throttle(onMailInput, 500));
textarea.addEventListener('input', throttle(onTextareaInput, 500));

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

function onFormSubmit (e) {
    e.preventDefault();

    console.log(savedText);

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onMailInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onTextareaInput(e) {
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



