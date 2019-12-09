// Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 - sum number и 2 - fibonacci, первые 10 элементов будут:
//
//     1 - sum number, 2 - fibonacci, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.

let listFib = [];

function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
let sum = 0;
for (let j = 1; j < 4000000; j++) {
    listFib.push(fib(j));

}
for (let i = 1; i < listFib.length; i++) {
    if(listFib[i] % 2 == 0){
        sum += listFib[i]
    }

}

console.log(listFib , sum)