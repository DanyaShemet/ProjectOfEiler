// Простые делители числа 13195 - это 5, 7, 13 и 29.
//
// Каков самый большой делитель числа 600851475143, являющийся простым числом?

let n = 10;

nextPrime:
	for (var i = 2; i <= n; i++) { // Для всех i...
		for (let j = 2; j < i; j++) { // проверить, делится ли число..
			if (i % j == 0) continue nextPrime; // не подходит, берём следующее
		}
		console.log( i )
	}
