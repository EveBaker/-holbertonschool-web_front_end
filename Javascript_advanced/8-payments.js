function processPayment(amount) {
    console.log(`Collecting payment of ${amount}`);
}

function processOrder(orderId, amount) {
    console.log(`${orderId} is being processed`);
    processPayment(amount);
    console.log(`${orderId} has been fully processed`);
}

console.log('Processing orders');
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log('All the orders have been processed');

/*
things to know:

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
*/