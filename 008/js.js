// Наибольшее произведение четырех последовательных цифр в нижеприведенном
// 1000-значном числе равно 9 × 9 × 8 × 9 = 5832.
// Найдите наибольшее произведение тринадцати последовательных цифр в данном числе.

let arr = [];
let max = 0;
let idx = 0;

function makeArray(count, number) { // Создает массив массивов из числа
    number = String(number).split('')
    for (let i = 0; i < number.length; i++) {
        let numbers = []
        for (let k = 0; k < count; k++) {
            if(+number[i+k]){
                numbers.push(+number[i + k])
            }
        }
        if(numbers.length === count){
            arr.push(numbers)
        }

    }
    calcSum(arr)
}

function calcSum(arr) { // Подсчет произведенного всех массивов в масиве
    for (let i =0;i<arr.length;i++){
        let tmp = arr[i].reduce((total, el) => {
            return total * el
        });
        if(max < tmp){
            max = tmp;
            tmp = 0;
            idx = i
        }
    }
    console.log(`${arr[idx]}  === ${max} index : ${idx} from ${arr.length}`)
    console.log(arr)
}
makeArray(5,7316717653933296)








