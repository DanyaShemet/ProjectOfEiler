// Последовательность треугольных чисел образуется путем сложения натуральных чисел.
// К примеру, 7-ое треугольное число равно 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. Первые десять треугольных чисел:
//
//     1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
//
// Перечислим делители первых семи треугольных чисел:
//
//     1: 1
// 3: 1, 3
// 6: 1, 2, 3, 6
// 10: 1, 2, 5, 10
// 15: 1, 3, 5, 15
// 21: 1, 3, 7, 21
// 28: 1, 2, 4, 7, 14, 28
// Как мы видим, 28 - первое треугольное число, у которого более пяти делителей.
//
// Каково первое треугольное число, у которого более пятисот делителей?


function generateTriangleNumber(count) {
    let number = [];
    let current = 0;
    for(let i = 1; i<=count;i++){
        current += i;
        number.push(current)
    }
    console.log(calcDivider(number, 500))
    return number
}
function calcDivider(num, desiredValue){
    let divider = [];
    for (let i=0;i<num.length;i++){
        let count = 0;
        for(let j=1;j<=num[i];j++){
            if(num[i] % j === 0){
                count++;
            }
        }
        if (count >= desiredValue){
            divider.push({Triangle_number: num[i], Count_Of_Deviders: count })
            break
        }
    }
    return divider
}

generateTriangleNumber(10000)