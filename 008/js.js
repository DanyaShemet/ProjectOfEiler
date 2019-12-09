// Наибольшее произведение четырех последовательных цифр в нижеприведенном
// 1000-значном числе равно 9 × 9 × 8 × 9 = 5832.
// Найдите наибольшее произведение тринадцати последовательных цифр в данном числе.


let number = 7316717653133206;
let arr = []
var allPairs
number = String(number).split('')
for (let i = 0; i < number.length; i++) {
    if(i < number.length - 3) {
        allPairs = [+number[i],+number[i+1],+number[i+2],+number[i+3]]
        arr.push(allPairs);
    }

}
//console.log(arr)
// let max = 0;
// let idx = 0
// for (let i =0;i<arr.length;i++){
//     let tmp = arr[i][0] * arr[i][1] * arr[i][2] *arr[i][3]
//     if(max < tmp ){
//         max = tmp
//         tmp = 0
//         idx = i
//     }
//
//
// }
// console.log(`${arr[idx]}  === ${max}`)


let max = 0;
let idx = 0
for (let i =0;i<arr.length;i++){
    for (let j =0;j<arr[i].length;j++){
        console.log(arr[i][j])
    }




}
console.log(`${arr[idx]}  === ${max}`)

