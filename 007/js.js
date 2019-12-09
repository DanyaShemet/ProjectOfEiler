
// Выписав первые ше	сть простых чисел, получим 2, 3, 5, 7, 11 и 13.
// Очевидно, что 6-ое простое число - 13.
//
// Какое число является 10001-ым простым числом?


let n = 1000000;
let simpleNum = []
nextPrime:
	for (var i = 2; i <= n; i++) { // Для всех i...
		for (let j = 2; j < i; j++) { // проверить, делится ли число..
			if (i % j === 0) continue nextPrime; // не подходит, берём следующее
		}
		simpleNum.push(i)
	}
console.log( simpleNum[10000] )
