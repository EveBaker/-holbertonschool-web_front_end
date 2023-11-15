var globalVariable = "Welcome";

function outer() {
    alert(globalVariable);
    var course = "Holberton";

function inner() {
    alert(globalVariable + " " + course);
    var exclamation = "!";

    function inception(){
        alert(globalVariable + " " + course + exclamation);
    }
    inception();
    }
    inner();
}
outer();

/*
Closure and Scope Chain:

Closure~
A closure in JavaScript is a function that remembers
its outer variables and can access them.

Scope and Chain~ 
this refers to the order in which the interpreter looks for variables. 
the innermost scope is checked first, then the outer scopes, up to the 
global scope.
*/
