function HandasmNaivePrime(stdlib, foreign, heap) {
	"use asm";

	var sqrt = stdlib.Math.sqrt,
		floor = stdlib.Math.floor;

	function isPrime(n) {
		n = +n; //annotate as int
		
		var i = 2.0,
			q = 0.0;

		if(n<2.0) {
			return 0;
		}

		q=+sqrt(n);

		for (i; i <= q; i=(i+1.0)) {
			if(n % i==0.0) {
				return 0;
			}
		}
		return 1;
	}
	
	function countPrimes(n) {
		n = +n;
		
		var counter = 0,
			i = 0.0,
			x = 0;
		
		 for (i; i <= n; i = i + 1.0) {
			 x = isPrime(i)|0;
			if(x|0 == 1|0) {
				counter = counter + 1|0;
			}
		}
		
		return counter|0;
	}

	return {
		isPrime: isPrime,
		countPrimes: countPrimes
	};
}