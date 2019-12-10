// 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.
// //
// // Какое самое маленькое число делится нацело на все числа от 1 до 20?

function gcd(a, b) {
	return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
}
function lcm(a, b) {
	return a * b / gcd(a, b);
}
function divisible(a){
	var result = 1;
	for(var i=2; i<=a; ++i)
		result = lcm(result, i);
	return result;
}

console.log(divisible(20))