
var inputAll = document.querySelectorAll('.form__input');
var btnSub = document.querySelector('.form__btn');
var form = document.forms.formMain;
var inputCheckbox = form.elements.commentary;
var textarea = form.elements.mytext;
var getSelect = form.elements.selection;
var getRadio = form.elements.rad;

console.log(getRadio);

form.onsubmit = function () {
    for (let key of inputAll) {
        if (key.value.trim() === '') {
            key.classList.add('error');
            key.focus();
            return false;
        } else {
            key.classList.remove('error');
        }
    };
    //Проверка select
    if (getSelect.selectedIndex === 0) {
        getSelect.classList.add('error');
        getSelect.focus();
        return false;
    } else {
        getSelect.classList.remove('error');
    }
    //Проверка radio
    for (let key of getRadio) {
        if (key.checked === false) {
            key.classList.add('error');
            key.focus();
            return false;
        } else {
            getRadio.classList.remove('error');
        }
    }
    //Проверка сheckbox
    if (inputCheckbox.checked === false) {
        inputCheckbox.classList.add('error');
        inputCheckbox.focus();
        return false;
    } else {
        textarea.classList.remove('error');
    }
    //Проверка textarea
    if (textarea.value.trim() === '') {
        textarea.classList.add('error');
        textarea.focus();
        return false;
    } else {
        textarea.classList.remove('error');
    }
};
