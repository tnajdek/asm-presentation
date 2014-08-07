all: emscripten-all c-all

primes: primes.c
	emcc --memory-init-file 0 -O3 primes.c -o jsbuild/primes.js -s  EXPORTED_FUNCTIONS="['_isPrime', '_countPrimes']"

helloworld: helloworld.c
	emcc --memory-init-file 0 -O3 helloworld.c -o jsbuild/helloworld.js

c-primes: primes.c
	gcc -std=c11 -lm -O3 primes.c -o cbuild/primes

c-helloworld: helloworld.c
	gcc -O3 helloworld.c -o cbuild/helloworld

c-all: c-helloworld c-primes
emscripten-all: primes helloworld