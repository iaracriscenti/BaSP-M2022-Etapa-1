window.onload = function () {
    //DOM elements
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var idNumber = document.getElementById('id-number');
    var birthDate = document.getElementById('birth-date');
    var phoneNumber = document.getElementById('phone-number');
    var address = document.getElementById('address');
    var location = document.getElementById('location');
    var postCode = document.getElementById('post-code');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var repeatPassword = document.getElementById('repeat-password');
    var signupButton = document.getElementById('btn-sign-up');
    //email REGEX
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    //array with elements
    var array = [name,surname,idNumber,birthDate,phoneNumber,address,location,postCode,email,password,repeatPassword];

    //Load the data from LocalStorage if there is some
    if (localStorage.length > 0) {
        name.value = localStorage.getItem('name');
        surname.value = localStorage.getItem('lastName');
        idNumber.value = localStorage.getItem('dni');
        birthDate.value = dateFormat(localStorage.getItem('dob'),false);
        phoneNumber.value = localStorage.getItem('phone');
        address.value = localStorage.getItem('address');
        location.value = localStorage.getItem('city');
        postCode.value = localStorage.getItem('zip');
        email.value = localStorage.getItem('email');
        password.value = localStorage.getItem('password');
        repeatPassword.value=localStorage.getItem('password');
    };

    //Add the events for all the elements
    array.forEach(function(element) {
        element.addEventListener('blur', function() {
            //run the validations
            validation(element);
        });
        element.addEventListener('focus', function() {
            //reset properties
            reset(element);
        });
    });

    //Does the validation based on the element
    function validation (type) {
        switch(type) {
            case name:
                checkName();
            break;
            case surname:
                checkSurname();
            break;
            case email:
                checkEmail();
            break;
            case password:
                checkPassword();
            break;
            case repeatPassword:
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

    //Check if the inputs are incomplete
    function checkInput (input) {
        if (input.value === '') {
            //show error with message
            showError(input,'Please complete this field.');
            return true;
        };
    };

    //Check if there are digits in the string
    function formatValidator (string) {
        string = string.split(" ").join(""); //remove spaces
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (Number(string[i]) == string[i]) {
                control ++;
            };
        };
        //returns true if the string contains digits
        return (control !== 0);
    };

    //Check if there are special characters in the string
    function isASymbol (string) {
        var symbols = '!"#$%&/()=?¡¿|¨*][_:;,.-{}+¬°~^`@'+"'"+" ";
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (symbols.includes(string[i])) {
                    control ++;
            };
        };
        //returns true if the string contains a special character
        return (control !== 0);
    };

    function hasFourLetters (string){
        control=0;
        for (var i=0;i<string.length;i++) {
            //Check if the character isn't a special character nor a number
            if(!isASymbol(string[i]) && isNaN(string[i])) {
                control++;
            };
        };
        //returns true if the string has more than 3 letters
        return (control > 3);
    };

    function checkName (){
        if (checkInput(name)) {
            return 'Name field incomplete';
        } else if (name.value.length < 4) {
            showError(name,'It must contain at least 4 characters.');
            return 'Invalid name length';
        } else if (formatValidator(name.value) || isASymbol(name.value)) {
            showError(name,'Please insert a valid format. It must not contain numbers or symbols.');
            return 'Invalid name format';
        } else {
            return '';
        }
    };

    function checkSurname (){
        if (checkInput(surname)) {
            return 'Surname field incomplete';
        } else if (surname.value.length < 4) {
            showError(surname,'It must contain at least 4 characters.');
            return 'Invalid surname length';
        } else if (formatValidator(surname.value) || isASymbol(surname.value)) {
            showError(surname,'Please insert a valid format. It must not contain numbers.');
            return 'Invalid surname format';
        } else {
            return '';
        }
    };

    function checkEmail () {
        if (checkInput(email)) {
            return 'Email field incomplete';
        } else if (!emailFormat.test(email.value)){
            showError(email,'Please insert a valid email.');
            return 'Invalid Email format';
        } else {
            return '';
        };
    };

    function checkPassword () {
        if (checkInput(password)) {
            return 'Password field incomplete';
        } else if (password.value.length < 8) {
            showError(password,'It must contain at least 8 characters.');
            return 'Password too short';
        } else if (!formatValidator(password.value) || !isNaN(password.value) || isASymbol(password.value)){
            showError(password,'Please insert a valid password. It must contain numbers and letters.');
            return 'Invalid password format';
        } else {
            return '';
        };
    };

    function checkRepeatPassword() {
        if (checkInput(repeatPassword)) {
            return 'Repeat Password field incomplete';
        } else if (repeatPassword.value !== password.value) {
            showError(repeatPassword,"Passwords don't match. Please enter again.");
            return "Passwords don't match";
        } else {
            return '';
        };
    };

    function checkID(){
        if (checkInput(idNumber)) {
            return 'ID number field incomplete';
        } else if (idNumber.value.length < 8) {
            showError(idNumber, 'It must contain more than 7 numbers.');
            return 'ID too short';
        } else if (isNaN(idNumber.value) || isASymbol(idNumber.value)){
            showError(idNumber,'Please insert a number.');
            return 'Invalid ID number';
        } else {
            return '';
        };
    };

    function checkDate(){
        if(checkInput(birthDate)){
            return 'Birth date field incomplete';
        } else if ((new Date(birthDate.value)) >= new Date()) {
            showError(birthDate,'The date entered is after the current date.');
            return 'Birth date is after the current date';
        } else {
            return '';
        };
    };

    //Returns mm/dd/yyyy format if UIformat value is true, if not, returns yyyy-mm-dd format
    function dateFormat (value,UIformat) {
        var date = new Date(value);
        var dd = date.getDate()+1;
        var mm = date.getMonth()+1;
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        };
        if (mm < 10) {
            mm = '0' + mm;
        };
        if (UIformat) {
            return mm + '/' + dd + '/' + yyyy;
        } else {
            //Need to subtract 1 so that the input type date reads it correctly
            dd = Number(dd)-1;
            if (dd < 10) {
                dd = '0' + dd;
            };
            return yyyy + '-' + mm + '-' + dd;
        };
    };


    function checkPhone(){
        if(checkInput(phoneNumber)){
            return 'Phone number field incomplete';
        } else if (isNaN(phoneNumber.value) || isASymbol(phoneNumber.value)){
            showError(phoneNumber,'Please insert only numbers.');
            return 'Invalid phone number';
        } else if (phoneNumber.value.length !== 10){
            showError(phoneNumber,'It must contain 10 numbers');
            return 'Invalid phone number';
        } else {
            return '';
        };
    };

    function checkPostCode(){
        if(checkInput(postCode)){
            return 'Postcode field incomplete';
        } else if (isNaN(postCode.value) || isASymbol(postCode.value)) {
            showError(postCode,'Please insert a number.');
            return 'Invalid Postcode';
        } else if (postCode.value.length < 4 || postCode.value.length > 5) {
            showError(postCode,'Please insert a number between 4 and 5 digits.');
            return 'Invalid Postcode';
        } else {
            return '';
        };
    };

    function checkLocation(){
        if(checkInput(location)){
            return 'Location field incomplete';
        } else if (location.value.length < 4 || !hasFourLetters(location.value)) {
            showError(location,'It must contain at least 4 letters.');
            return 'Location name too short';
        } else if (isASymbol(location.value)){
            showError(location,'Please insert a valid location.');
            return 'Invalid location format';
        } else {
            return '';
        };
    };

    function checkAddress (){
        if(checkInput(address)){
            return 'Address field incomplete';
        } else if (address.value.length < 5 || address.value.trim().split(" ").length < 2){
            showError(address,'It must contain at least 5 characters with a space in between.');
            return 'Invalid Address name';
        } else if (!formatValidator(address.value) || !isNaN(address.value.split(" ").join("")) || isASymbol(address.value.split(" ").join(""))) {
            showError(address,'It must contain numbers and letters.');
            return 'Invalid Address name';
        } else {
            return '';
        };
    };

    function showError (input, message) {
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

    //Save the data in LocalStorage
    function saveData(res){
        Object.entries(res.data).forEach(element => {
            localStorage.setItem(element[0],element[1]);
        });
    };

    //Display the alert indicating that there was an error
    function displayError(res) {
        var alertError = [];
        //if there is more than one error show them all, if not show that one only.
        if (res.hasOwnProperty('errors')) {
            Object.entries(res.errors).forEach(element => {
                alertError += '\n' + element[1].msg;
            });
        alert('Sorry, an error has occurred. Please check this items: '+alertError);
        } else {
            alert('Sorry, an error has occurred: '+ res.msg);
        };
    };

    //Create button functionality
    signupButton.addEventListener('click',function(e){
        e.preventDefault();
        //run all the validations
        array.forEach(function(element) {
           validation(element);
        });
        var validations = [checkName(), checkSurname (), checkID(), checkDate(), checkPhone(), checkPostCode()
        , checkAddress(), checkLocation(), checkPassword(), checkEmail (), checkRepeatPassword ()];
        var errors = [];
        //captures the validations that return error text and saves it in an array
        for (var i=0; i<validations.length;i++){
            if (validations[i] !== '') {
                errors += '\n' + validations[i];
            };
        };

        //alerts in case of error or success
        if (errors == ''){
            alert('All the info submitted succesfully!\n Name: '+name.value+ '\n Surname: '+surname.value+
            '\n ID number: '+idNumber.value+'\n Birth Date: '+dateFormat(birthDate.value,true)+'\n Phone Number: '
            +phoneNumber.value+'\n Address: '+address.value+'\n Location: '+location.value+'\n PostCode: '
            +postCode.value+'\n Email: '+email.value+'\n Password: '+password.value);

            // API Request
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + name.value  + '&lastName=' +
            surname.value + '&dni=' + idNumber.value + '&dob=' + dateFormat(birthDate.value,true) + '&phone=' +
            phoneNumber.value + '&address=' + address.value + '&city=' + location.value + '&zip=' + postCode.value
            + '&email=' + email.value + '&password=' + password.value)
            .then(function (response) {
                return response.json()
            })
            .then(function (jsonResponse) {
                //In case of success:
                if (jsonResponse.success) {
                    //Show success message
                    alert('The request was successful: '+ jsonResponse.msg)
                    //Call the function to save the data
                    saveData(jsonResponse);
                } else {
                throw jsonResponse
                }
            })
            .catch(function (error) {
                displayError(error);
            });
        } else {
            alert("Sorry, the user could't be created. Please check:" + errors);
        };
    });
};