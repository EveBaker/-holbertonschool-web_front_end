function welcome(firstName,lastName) {
    var fullName = firstName + '' + lastName;

    function displayFullName() {
        alert('Welcome ' + fullName + "!")
    }
    displayFullName();
}

/*to test use
welcome('Holberton', 'School'); Should get an alert saying welcome
alert(fullName); should get fulName not defined
*/

/*
Lexical scoping:
Refers to the scope(visabillity) of variables defined in a code block.
in JavaScript if you define a variable inside s function, it can only be accessed
within that function, not outside it. */