// Сумма простых чисел меньше 10 равна 2 + 3 + 5 + 7 = 17.
//
// Найдите сумму всех простых чисел меньше двух миллионов.

let simpleNum = []
nextPrime:
    for (var i = 2; i <= 2000000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue nextPrime
            }

        }
        simpleNum.push(i)
        var tmp = simpleNum.reduce((total, el) => {
            return total + el
        })

    }


console.log(simpleNum)
console.log(tmp)