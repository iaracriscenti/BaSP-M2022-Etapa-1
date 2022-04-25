window.onload = function () {
    //DOM elements
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var idNumber = document.getElementById('idNumber');
    var birthDate = document.getElementById('birthDate');
    var phoneNumber = document.getElementById('phoneNumber');
    var address = document.getElementById('address');
    var location = document.getElementById('location');
    var postCode = document.getElementById('postCode');
    var email = document.querySelector('input[type="email"]');
    var password = document.getElementById('password');
    var repeatPassword = document.getElementById('repeatPassword');
    var signupButton = document.getElementById('btn-sign-up');
    //regex formats
    var nameFormat = /^[^0-9]{4,}$/;
    var idFormat = /^[0-9]{8,}$/;
    var phoneFormat = /[0-9]/;
    var addressFormat = /[\w]/;
    var locationFormat = /^[a-z0-9A-Z]{4,}$/;
    var postCodeFormat = /^[0-9]{4,5}$/;
    var passwordFormat = /(?=.*[a-z])(?=.*[0-9])/;
    var emailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    var array = [name,surname,idNumber,birthDate,phoneNumber,address,location,postCode,email,password,repeatPassword];
    
    array.forEach(function(element) {
        element.addEventListener('blur', () => {
            // email validation
            validation(element);
        });
        element.addEventListener('focus', () => {
            //reset properties
            reset(element);
        });
    });
    
    // funcion validacion
    function validation (type) {
        switch(type) {
            case name:
                checkName(name);
            break;
            case surname:
                checkName(surname);
            break;
            case email:
                checkEmail();
            break;
            case password:
                checkPassword();
                checkRepeatPassword();
            break;
            case repeatPassword:
                // checkPassword();
                checkRepeatPassword();
            break;
            case idNumber:
                checkID();
            break;
            case birthDate:
                checkDate();
            break;
            case phoneNumber:
                checkPhone();
            break;
            case postCode:
                checkPostCode();
            break;
            case location:
                checkLocation();
            break;
            case address:
                checkAddress();
            break;
        };
    };

    function checkInput (input) {
        if (input.value === '') {
            //show error with message
            showError(input,'Please complete this field.');
            return true;
        };
    };

    function checkName (element){
        if (checkInput(element)) {
            return true;
        };
        if (!nameFormat.test(element.value)){
            if (element.value.length < 4) {
                showError(element,'It must contain at least 4 characters.');
            } else {
                //show error with message
                showError(element,'Please insert a valid format. It must not contain numbers.');
            }
            return true;
        };
    };

    function checkEmail () {
        if (checkInput(email)) {
            return true;
        };
        if (!emailFormat.test(email.value)){
            //show error with message
            showError(email,'Please insert a valid email.');
            return true;
        };
    };

    function checkPassword () {
        if (checkInput(password)) {
            return true;
        };
        if (!passwordFormat.test(password.value)){
            //show error with message
            showError(password,'Please insert a valid password. It must contain numbers and letters.');
            return true;
        } else if (password.value.length < 8) {
            //show error with message
            showError(password,'It must contain at least 8 characters.');
            return true;
        }
    };

    function checkRepeatPassword() {
        if (checkInput(repeatPassword)) {
            return true;
        };
        if (repeatPassword.value !== password.value) {
            //show error with message
            showError(repeatPassword,"Passwords don't match. Please enter again.");
            return true;
        };
    };

    function checkID(){
        if (checkInput(idNumber)) {
            return true;
        };
        if (!idFormat.test(idNumber.value)){
            //show error with message
            showError(idNumber,'Please insert a valid ID. It must contain more than 7 numbers.');
            return true;
        };
    };

    function checkDate(){
        if(checkInput(birthDate)){
            return true;
        };
    };

    function checkPhone(){
        if(checkInput(phoneNumber)){
            return true;
        };
        if (!phoneFormat.test(phoneNumber.value) || phoneNumber.value.length !== 10){
            //show error with message
            showError(phoneNumber,'Please insert a valid phone number. It must contain 10 numbers');
            return true;
        };
    };

    function checkPostCode(){
        if(checkInput(postCode)){
            return true;
        };
        if (!postCodeFormat.test(postCode.value)){
            //show error with message
            showError(postCode,'Please insert a valid postcode');
            return true;
        };
    };

    function checkLocation(){
        if(checkInput(location)){
            return true;
        };
        if (!locationFormat.test(location.value)){
            //show error with message
            showError(location,'Please insert a valid location. It must contain at least 4 characters.');
            return true;
        };
    };

    function checkAddress (){
        if(checkInput(address)){
            return true;
        };
        if (!addressFormat.test(address.value) || address.value.length < 5 || address.value.trim().split(" ").length < 2){
            //show error with message
            showError(address,'It must contain at least 5 characters separated by a space.');
            return true;
        };
    }

    function showError (input,message) {
        var container = input.parentElement;
        var text = container.querySelector('p');
        //add error message
        text.textContent = message;
        //add error class
        container.className = 'status-control error';
    };

    function reset (input) {
        var container = input.parentElement;
        //reset class name
        container.className = 'status-control';
    };
   
    //Button login functionality
    signupButton.addEventListener('click',function(e){
        e.preventDefault();
        //run the validations
        array.forEach(function(element) {
            validation(element);
        });
        //alerts in case of error or success
        if (checkName(name) || checkName (surname) || checkDate() || checkID() || checkPhone() || checkPostCode() 
        || checkAddress() || checkPassword() || checkEmail () || checkRepeatPassword ()) {
            alert('An error has ocurred. Please enter the data correctly.');
        } else {
            alert('All the info submitted succesfully!');
        }
    });
};