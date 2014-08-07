function NativeNaivePrime() {
	"use strict";

	this.isPrime = function(n) {
		if (n < 2) return false;
		var q = Math.sqrt(n);

		for (var i = 2; i <= q; i++) {
			if (n % i === 0) {
				return false;
			}
		}
		return true;
	}

	this.countPrimes = function(n) {
		var counter = 0,
		i;
		for (i = 0; i <= n; i++) {
			if (this.isPrime(i)) {
				counter++;
			}
		}
		return counter;
	}
}