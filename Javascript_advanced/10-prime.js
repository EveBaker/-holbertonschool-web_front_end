function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

function countPrimeNumbers() {
    let count = 0;
    for (let number = 2; number <= 100; number++) {
        if (isPrime(number)) {
            count++;
        }
    }
    return count;
}

const startTime = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const endTime = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);