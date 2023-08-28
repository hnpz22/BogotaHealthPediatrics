'use strict'

const password = document.getElementById('password');

function ShowPassword(){
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}
export{ShowPassword};