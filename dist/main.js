'use strict'
import {showPasswordFunction, showContainerPasswordAndHideEmail, showPasswordFunction2, 
        showContainerOptionsNav} from './animations.js';
import {ShowPassword} from './functionalities.js';
import {validateForm, fieldsValidation} from './validation.js';

/* Get id to animations */
const btnHiddenPassword = document.getElementById('hiddenPassword'); 
const btnShowPassword = document.getElementById('showPassword');
const btnHiddenPassword2 = document.getElementById('hiddenPassword2'); 
const btnShowPassword2 = document.getElementById('showPassword2');

const btnChangeEmailToPassword = document.getElementById('buttonChangeContainer');
const btnReturnEmailToPassword = document.getElementById('buttonReturnToEmail');

const btnImage = document.getElementById('arrowImage');

const iconShow = document.getElementById('showPassword');
const iconHide = document.getElementById('hiddenPassword');
const iconShow2 = document.getElementById('showPassword2');
const iconHide2 = document.getElementById('hiddenPassword2');

/* Get id to validation */

const form = document.getElementById('formContact');
const inputs = document.querySelectorAll('#formContact input');
const texAreas = document.querySelectorAll('#formContact textarea')

/* Events on click to make little animations */

btnShowPassword?.addEventListener('click', showPasswordFunction);
btnHiddenPassword?.addEventListener('click', showPasswordFunction);
btnShowPassword2?.addEventListener('click', showPasswordFunction2);
btnHiddenPassword2?.addEventListener('click', showPasswordFunction2);


btnChangeEmailToPassword?.addEventListener('click', showContainerPasswordAndHideEmail);
btnReturnEmailToPassword?.addEventListener('click', showContainerPasswordAndHideEmail);

btnImage?.addEventListener('click', showContainerOptionsNav);

iconShow?.addEventListener('click', ShowPassword);
iconHide?.addEventListener('click', ShowPassword);
iconShow2?.addEventListener('click', ShowPassword);
iconHide2?.addEventListener('click', ShowPassword);

/* validation */


inputs.forEach( (input)=>{
    input.addEventListener('keyup', validateForm);
})
texAreas.forEach( (textarea)=>{
    textarea.addEventListener('keyup', validateForm);
})
form?.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(fieldsValidation.name && fieldsValidation.lastName && fieldsValidation.email
        && fieldsValidation.telephone && fieldsValidation.msn === true){
        document.querySelector('#GroupContainerActions #formMessageSuccess').classList.add('messageSuccess');
        document.querySelector('#GroupContainerMessageError').classList.remove('is_valid_information'); 
        form.reset();
    }else{
        document.querySelector('#GroupContainerActions #formMessageSuccess').classList.remove('messageSuccess');
        document.querySelector('#GroupContainerMessageError').classList.add('is_valid_information');        
    }
})




