// Если записать числа от 1 до 5 английскими словами
// (one, two, three, four, five), то используется всего 3 + 3 + 5 + 4 + 4 = 19 букв.
//
//  Сколько букв понадобится для записи всех чисел от 1 до 1000 (one thousand) включительно?
//  Примечание: Не считайте пробелы и дефисы. Например, число 342 (three hundred and forty-two)
//  состоит из 23 букв, число 115 (one hundred and fifteen) - из 20 букв.
//  Использование "and" при записи чисел соответствует правилам британского английского.

let nums = {
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
    20:'twenty',
    30:'thirty',
    40:'forty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety',
};

function getNum(n ,dic) {
    let tmp = '';
    if(n <= 20 ){
        return dic[n]
    }
    else if(n < 100){
        tmp = String(n).split('')
        if(tmp[1] == 0){
            return dic[n]
        }
        return dic[tmp[0]+0] + dic[tmp[1]]
    }
    else if(n < 1000) {
        tmp = String(n).split('')
        if(tmp[1] == '0' && tmp[2] == '0'){
            return dic[tmp[0]] + 'hundred'
        }else{
            let twoDigitsAfter  = tmp[1].concat(tmp[2])
            return dic[tmp[0]] + 'hundredand' + getNum(twoDigitsAfter, nums)
        }
    }
    else{
        return 'onethousand'
    }
}
let string = '';
for(let i=1;i<=1000;i++){
    string += getNum(i,nums)
    console.log(getNum(i,nums))
}

console.log(string.length)