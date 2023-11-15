console.log('Start of the execution queue');

setTimeout(function() {
    console.log('Final code block to be executed');
}, 0);

for( let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log('End of the loop printing');

/*
things to know:
setTimeout:
even with a delay of 0, places its callback at the end of the current event loop,
meaning it will execute after the currently executing script,
including any synchronous tasks like loops.
*/