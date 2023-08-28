'use strict'
/* class Validate{
    validNames (value){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const response = value.match(nombresRX) ? true : false;
        return response;
    }   
    validMail (value){
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const response = value.match(mailRX)? true : false;
        return response;
    }
    validTelephone (value){
        const telephoneRX = /^(\(?(\+57)\)?)?(3)(0|1|2|5)(\d{1})[-]?(\d{3})[-]?(\d{4})$/g ;
        const response = value.match(telephoneRX) ? true : false;
        return response;
    }
    validTexBox(value){
        const textBoxRX = /^[\W.a-zA-ZÀ-ÖØ-öø-ÿ\s\d]{20,80}$/g;
        const response = value.match(textBoxRX) ?true :false; 
        return response;
    }
    validForm = (objeto) =>{
        const valores = Object.values(objeto);
        let response = valores.findIndex(e => e === false); 
        return response;
    }
} */

const fieldsValidation = {
    name: false,
    lastName: false,
    email: false,
    telephone: false,
    msn: false
    
}

const validation = {
    name: /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g,
    lastName: /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g,
    email: /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g,
    telephone: /^(\(?(\+57)\)?)?(3)(0|1|2|5)(\d{1})[-]?(\d{3})[-]?(\d{4})$/g,
    msn: /^[\W.a-zA-ZÀ-ÖØ-öø-ÿ\s\d]{20,80}$/g
}

const validateForm = (e) =>{
    switch(e.target.name){
        case "name":
            if(validation.name.test(e.target.value)){
                document.getElementById('nameForm').classList.remove('is_invalid_information');
                document.querySelector('#groupName #imageChecked').classList.add('show_image_valid');
                document.querySelector('#groupName #imagenWrong').classList.remove('show_image_invalid');
                document.querySelector('#groupName .form_input_name_error ').classList.remove('messaje_error_alert');
                fieldsValidation.name = true;
            }else{
                document.getElementById('nameForm').classList.add('is_invalid_information');
                document.querySelector('#groupName #imageChecked').classList.remove('show_image_valid');
                document.querySelector('#groupName #imagenWrong').classList.add('show_image_invalid');
                document.querySelector('#groupName .form_input_name_error').classList.add('messaje_error_alert');
                fieldsValidation.name = false;
            }
        break;
        case "lastName":
            if(validation.lastName.test(e.target.value)){
                document.getElementById('lastNameForm').classList.remove('is_invalid_information');
                document.querySelector('#groupLastName #imageChecked').classList.add('show_image_valid');
                document.querySelector('#groupLastName #imagenWrong').classList.remove('show_image_invalid');
                document.querySelector('#groupLastName .form_input_name_error ').classList.remove('messaje_error_alert');
                fieldsValidation.lastName = true;
                
            }else{
                document.getElementById('lastNameForm').classList.add('is_invalid_information');
                document.querySelector('#groupLastName #imageChecked').classList.remove('show_image_valid');
                document.querySelector('#groupLastName #imagenWrong').classList.add('show_image_invalid');
                document.querySelector('#groupLastName .form_input_name_error').classList.add('messaje_error_alert');
                fieldsValidation.lastName = false;
            }
        break;
        case "email":
            if(validation.email.test(e.target.value)){
                document.getElementById('mailForm').classList.remove('is_invalid_information');
                document.querySelector('#groupMail #imageChecked').classList.add('show_image_valid');
                document.querySelector('#groupMail #imagenWrong').classList.remove('show_image_invalid');
                document.querySelector('#groupMail #formMessageErrorP ').classList.remove('messaje_error_alert');
                fieldsValidation.email = true;
                
            }else{
                document.getElementById('mailForm').classList.add('is_invalid_information');
                document.querySelector('#groupMail #imageChecked').classList.remove('show_image_valid');
                document.querySelector('#groupMail #imagenWrong').classList.add('show_image_invalid');
                document.querySelector('#groupMail #formMessageErrorP').classList.add('messaje_error_alert');
                fieldsValidation.email = false;
            }
        break;
        case "telephone":
            if(validation.telephone.test(e.target.value)){   
                document.getElementById('telephoneForm').classList.remove('is_invalid_information');
                document.querySelector('#groupTelephone #imageChecked').classList.add('show_image_valid');
                document.querySelector('#groupTelephone #imagenWrong').classList.remove('show_image_invalid');
                document.querySelector('#groupTelephone #formMessageErrorP ').classList.remove('messaje_error_alert');
                fieldsValidation.telephone = true;
                
            }else{
                document.getElementById('telephoneForm').classList.add('is_invalid_information');
                document.querySelector('#groupTelephone #imageChecked').classList.remove('show_image_valid');
                document.querySelector('#groupTelephone #imagenWrong').classList.add('show_image_invalid');
                document.querySelector('#groupTelephone #formMessageErrorP').classList.add('messaje_error_alert');
                fieldsValidation.telephone = false;
            }
        break;
        case "msn":
            if(validation.msn.test(e.target.value)){
                document.getElementById('msnContactForm').classList.remove('is_invalid_information');
                document.querySelector('#groupMsn #formMessageErrorP ').classList.remove('messaje_error_alert');    
                fieldsValidation.msn = true;
            }else{
                document.getElementById('msnContactForm').classList.add('is_invalid_information');
                document.querySelector('#groupMsn #formMessageErrorP').classList.add('messaje_error_alert');
                fieldsValidation.msn = false;
            }
        break;
    }
}



export {validateForm, fieldsValidation};