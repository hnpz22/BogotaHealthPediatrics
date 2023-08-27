'use strict'

const hiddenPassword = document.getElementById('hiddenPassword'); 
const showPassword = document.getElementById('showPassword');

const hiddenPassword2 = document.getElementById('hiddenPassword2'); 
const showPassword2 = document.getElementById('showPassword2');

const hiddenContainerEmail = document.getElementById('hideContainerEmail'); 
const showContainerPassword = document.getElementById('showContainerPassword');

const showContainerNavOptions = document.getElementById('containerNavOptions');
const arrowImageChange = document.getElementById('arrowImage');

function showPasswordFunction(){
    showPassword.classList.toggle('hidden_password_hidden');
    hiddenPassword.classList.toggle('hidden_password_show_password');
}
function showPasswordFunction2(){
    showPassword2.classList.toggle('hidden_password_hidden');
    hiddenPassword2.classList.toggle('hidden_password_show_password');
}

function showContainerPasswordAndHideEmail(){
    hiddenContainerEmail.classList.toggle('container_sign_in_email_hidden');
    showContainerPassword.classList.toggle('container_sign_in_password');
}
function showContainerOptionsNav(){
    arrowImageChange.classList.toggle('arrow_image');
    showContainerNavOptions.classList.toggle('container_nav_options');
}

export{showPasswordFunction, showPasswordFunction2, showContainerPasswordAndHideEmail, showContainerOptionsNav};