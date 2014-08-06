function isPrime(n) {
    if (n < 2) return false;
    var q = Math.sqrt(n);

    for (var i = 2; i <= q; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function countPrimes(n) {
    var counter = 0,
        i;
    for (i = 0; i <= n; i++) {
        if (isPrime(i)) {
            counter++;
        }
    }
    return counter;
}

var start = Date.now(),
    end, diff, count;

count = countPrimes(1000000);

end = Date.now();

diff = end - start;

alert("primes count:" + count + "; time:" + diff);