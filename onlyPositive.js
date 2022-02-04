// 5 . If a negative number is found, the loop will stop / onlyPositive ||
function onlyPositive(numbers) {
    let positiveNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number >= 0) {
            positiveNumber.push(number);
        }
        else if (number < 0) {
            break;
        }
    }
    return positiveNumber;
};
const positiveNum = onlyPositive([23, 56, 1, 0, 45, 67, 89, -67, -21, 98, 43, 21]);
console.log(positiveNum);