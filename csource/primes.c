#include<stdio.h>
#include<math.h>
 
int isPrime(int n) {
	if(n < 2) {
		return 0;
	}

	double q = sqrt((double) n);

	for(int i = 2; i <= q; i++) {
		if(n % i == 0) {
			return 0;
		}
	}
	return 1;
}

int countPrimes(int n) {
	int counter = 0;

	for(int i; i <= n; i++) {
		if(isPrime(i)) {
			counter++;
		}
	}
	return counter;
}


int main(int agrc, char *argv[]) {
	printf("%d\n", countPrimes(1000000));
	return 0;
}