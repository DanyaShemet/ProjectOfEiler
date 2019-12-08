// Число-палиндром с обеих сторон (справа налево и слева направо)
// читается одинаково. Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.
//
// Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.
let arrPalindroms = []
function f(number) {
	for (let i=1;i<number;i++){
		for (let j=1;j<number;j++){
			let a = i*j; // Первое число

			let str1 = String(a).split('');
			let str2 = str1.reverse()
			str2 = str2.join(''); // второе число


			if (a == str2){
				arrPalindroms.push(a)
			}
		}
	}
}
f(1000)
function getMaxOfArray(numArray) {
	return Math.max.apply(null, numArray);
}

console.log(getMaxOfArray(arrPalindroms))


