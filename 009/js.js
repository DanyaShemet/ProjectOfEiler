//
//
// Тройка Пифагора - три натуральных числа a < b < c, для которых выполняется равенство
// a^2 + b^2 = c^2
//
// Например, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// Существует только одна тройка Пифагора, для которой a + b + c = 1000.
// Найдите произведение abc.
function isInteger(num) {
    return (num ^ 0) === num;
}
function f(number) {
    let suminfor = 0
    let obj = []
    for(let i =2;i<=number;i++){
        for (let j=1;j<=number;j++){
            suminfor = i**2 + j**2
            let sqrt = Math.sqrt(suminfor)
            if(isInteger(sqrt) && j > i && i+j+sqrt === number){
                obj.push([i , j, sqrt ])
            }

        }
    }
    return obj
}

console.log(f(1000))

