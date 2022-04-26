window.onload = function(){
    //DOM elements
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('textarea');
    var options = document.querySelector('select');
    var buttonSend = document.getElementById('btn-send');
    var buttonReset = document.getElementById('btn-reset');
    //email REGEX
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    name.addEventListener('blur', function() {
        // name validation
        checkName();
    });

    name.addEventListener('focus', function() {
        //reset properties
        reset(name);
    });

    email.addEventListener('blur', function() {
        // email validation
        checkEmail();
    });

    email.addEventListener('focus', function() {
        //reset properties
        reset(email);
    });

    message.addEventListener('blur', function() {
        // message validation
        checkMessage();
    });

    message.addEventListener('focus', function() {
        //reset properties
        reset(message);
    });

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
        if (control == 0) {
            return false;
        } else {
            return true;
        };
    };

    //Check if there are special characters in the string
    function isASymbol (string) {
        var symbols = '!"#$%&/()=?¡¿|¨*][_:;,.-{}+¬°~^`@'+"'";
        var control = 0;
        for (var i=0; i < string.length; i++) {
            for(var x=0;x < symbols.length;x++) {
                if (string[i] == symbols[x]) {
                    control ++;
                };
            }
        };
        //returns true if the string contains a special character
        if (control == 0) {
            return false;
        } else {
            return true;
        };
    };

    function checkName (){
        if (checkInput(name)) {
            return 'Name field incomplete';
        } else if (name.value.length < 4) {
            showError(name,'It must contain at least 4 characters.');
            return 'Name too short.';
        } else if (formatValidator(name.value) || isASymbol(name.value)) {
            showError(name,'Please insert a valid format. It must not contain numbers or symbols.');
            return 'Invalid name format';
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

    function checkMessage(){
        if(checkInput(message)){
            return 'Message field incomplete';
        } else if (message.value.length < 3){
            showError(message,'It must contain at least 3 characters.');
            return 'The message is too short';
        } else if (isASymbol(message.value)){
            showError(message,'Please insert a valid message.');
            return 'Invalid message format';
        } else {
            return '';
        };
    };

    function showError (input,textError) {
        var container = input.parentElement;
        var text = container.querySelector('p');
        //add error message
        text.textContent = textError;
        //add error class
        container.className = 'status-control error';
    };

    function reset (input) {
        var container = input.parentElement;
        //reset class name
        container.className = 'status-control';
    };

    //Button send functionality
    buttonSend.addEventListener('click', function(e) {
        e.preventDefault();
        //run the validations
        checkName();
        checkEmail();
        checkMessage();
        //alerts in case of error or success
        if (checkName() == '' && checkEmail() == '' && checkMessage()== '') {
            alert('Message sent successfully! \n Name: '+ name.value + '\n Email: '+email.value+'\n Contact area: '+options.value+'\n Message: '+message.value);
        } else {
            alert('An error has ocurred. Please enter the data correctly.'+'\n'+checkName()+'\n'+checkEmail()+'\n'+ checkMessage());
        }
    });

    //Button reset functionality
    buttonReset.addEventListener('click', function(e) {
        e.preventDefault();
        reset(name);
        name.value='';
        reset(email);
        email.value='';
        reset(message);
        message.value='';
    });

}