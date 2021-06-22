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
let before = performance.now();
countPrimeNumbers();
let after = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${after - before} milliseconds.`)
