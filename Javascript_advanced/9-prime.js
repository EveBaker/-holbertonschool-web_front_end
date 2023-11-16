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
const primeCount = countPrimeNumbers();
const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);