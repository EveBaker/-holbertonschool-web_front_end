## Java Script Advanced

<b>Needed info:

<b>Lexical scoping:<br> 
Refers to the scope(visability) of variables defined on a code block.<br> 
In Javascript if you define a variable inside a function It can only be accessed within that function,
not outside it.

<h4>Scope chain and closure:</h4>
<b>Closure:<br> 
a closure in Javascript is a function that remembers its outer variables and can access them.

<br><b>Scope chain:<br>
This refers to the order in which the interpreter looks for variables. The innermost scope is checked first, then outer scopes, up to the global scope.

<b>Higher-order functions:<br>
Functions that return other functions.

DOM Manipulation: Using JavaScript to add elements to and modify the Document Object Model (DOM) of a webpage.

setTimeout:
even with a delay of 0, places its callback at the end of the current event loop,
meaning it will execute after the currently executing script,
including any synchronous tasks like loops.

JavaScript Call Stack and Execution Order

Call Stack:
This is a mechanism used by JavaScript to keep track of function calls.
When a function is called, it's added to the stack, and when the function execution is complete, 
it's removed from the stack.

Synchronous Execution:
JavaScript executes code in a synchronous, single-threaded manner by default.
This means it will execute one operation at a time, in the order they appear in the code.

Function Execution:
When a function is called, JavaScript pauses the execution of the current function,
pushes the new function onto the call stack, and starts executing it.

Stack Order:
The last function that gets pushed onto the stack is the first to be completed and popped off.
This is known as Last In, First Out (LIFO).
