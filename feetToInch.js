// 1 . feet to inch with function / feetToInch ||
function feetToInch(feet) {
    const inches = feet * 12; // 12 inch = 1 feet
    return inches;
};
const totalInch = feetToInch(8);
console.log(totalInch, "inches");





// with error message ||
/* function feetToInch(feet) {
    if (feet <= 0) {
        return "please enter a number above 0"
    }
    else {
        const inches = feet * 12; // 12 inch = 1 feet
        return inches;
    }
};
const totalInch = feetToInch(10);
console.log(totalInch, "inches"); */