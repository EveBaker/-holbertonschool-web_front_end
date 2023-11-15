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