let countPrimeNumbers = () => {
    const isPrime = (num) => {
        for (let i = 2; i < num; ++i)
            if (num % i === 0) return false;
        return true;
    }

    let numberOfPrimes = 0;
    for (let i = 2; i < 100; ++i) {
        if (isPrime(i) === true) {
            numberOfPrimes += 1;
        }
    }
    return numberOfPrimes
}
let time = 0
setTimeout(() => console.log(`Execution time of calculating prime numbers 100 times was ${time} milliseconds.`), time);
let before = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
let after = performance.now();
time = after - before;
