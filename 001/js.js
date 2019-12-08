// Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
//
// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.


let list = [];
let count = 0;
let sum = 0;
for(let j = 1;j<=1000;j++){
	count++;
	list.push(count);
}
console.log(list);
for(let i=0;i<list.length-1;i++){
	if (list[i]%3==0 || list[i]%5==0) {
		sum += list[i];
	}
}
console.log(sum)

