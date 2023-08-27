'use strict'
import {showPasswordFunction, showContainerPasswordAndHideEmail, showPasswordFunction2, 
        showContainerOptionsNav} from './animations.js';

const btnHiddenPassword = document.getElementById('hiddenPassword'); 
const btnShowPassword = document.getElementById('showPassword');
const btnHiddenPassword2 = document.getElementById('hiddenPassword2'); 
const btnShowPassword2 = document.getElementById('showPassword2');

const btnChangeEmailToPassword = document.getElementById('buttonChangeContainer');
const btnReturnEmailToPassword = document.getElementById('buttonReturnToEmail');

const btnImage = document.getElementById('arrowImage');

btnShowPassword?.addEventListener('click', showPasswordFunction);
btnHiddenPassword?.addEventListener('click', showPasswordFunction);
btnShowPassword2?.addEventListener('click', showPasswordFunction2);
btnHiddenPassword2?.addEventListener('click', showPasswordFunction2);


btnChangeEmailToPassword?.addEventListener('click', showContainerPasswordAndHideEmail);
btnReturnEmailToPassword?.addEventListener('click', showContainerPasswordAndHideEmail);

btnImage?.addEventListener('click', showContainerOptionsNav);


