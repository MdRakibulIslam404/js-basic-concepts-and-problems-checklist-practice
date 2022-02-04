// 1. write 3 variable ||
const num = 2344;
const str = "sadia";
const bool = false;

// 2. let and const ||
let et = 23; // can change value
const cn = 54; // don't change value
et = 45;
// console.log(et);

// 3. simple math operations ||
const fst = 10;
const scd = 20;
const add = fst + scd;
// console.log(add);
const minus = scd - fst;
// console.log(minus);
const multiply = fst * scd;
// console.log(multiply);
const vag = fst / scd;
// console.log(vag);
const modulus = scd % fst;
// console.log(modulus);

// 4. comparison ||
const a = 23;
const b = 34;
if (a == b) {
    // console.log(true);
}
else {
    // console.log(false);
}
if (a != b) {
    // console.log(true);
}
else {
    // console.log(false);
}
if (a >= b) {
    // console.log(true);
}
else {
    // console.log(false);
}
if (a <= b) {
    // console.log(true);
}
else {
    // console.log(false);
}
if (a > b) {
    // console.log(true);
}
else {
    // console.log(false);
}
if (a < b) {
    // console.log(true);
}
else {
    // console.log(false);
}

// 5. fullfil both condition and fullfil one condition ||
/* const first = 4555;
const second = 2454;
const third = 5653; */
/* if (first >= second && second < third) {
    // console.log("It's", true);
}
if (first == third || third != first && first > second) {
    // console.log("you are", true);
} */

// 6. if , else if ||
const first = 4555;
const second = 2454;
const third = 5653;
if (first > second && second == third) {
    // console.log("ami phone kimnu na");
}
else if (third != second || third < first) {
    // console.log("ami phone kinmu");
}

// 7. (7 to 19) display only odd number including/with 7 and 19 ||
let oddNum = 0;
let i = 7;
while (i <= 19) {
    // console.log(i);
    i += 2;
}

// 8. declare an array../ number of element../ update or change 4th position element../ add and remove element../ check whether specific value exists in the array ||
const arr = ["raki", "saki", "faki", "daki", "laki", "taki"];
// console.log(arr.length);
arr[4] = "gaki";
// console.log(arr);
arr.push("baki");
// console.log(arr);
arr.pop();
// console.log(arr);
const exists = arr.indexOf("raki");
// console.log(exists);
const withIndex = arr[4];
// console.log(withIndex);
arr[1] = "sadi";
// console.log(arr);
const nu = [45, 67, 32, 12, 23];
const add2element = nu[1] + nu[4];
// console.log(add2element);
for (let i = 0; i < nu.length; i++) {
    const element = nu[i];
    // console.log(element);
}

// 9. display all element an array with for or for of loop  ||
const names = ["raki", "saki", "faki", "daki", "laki", "taki"];
// for (const name of names){
//     console.log(name);
// }
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    // console.log(name);
}

// 10. display only number bigger than 80 in an array ||
function biggerThan80(numbers) {
    let numbs = [];
    for (const number of numbers) {
        if (number > 80) {
            numbs.push(number);
        }
    }
    return numbs;
};
const myNumber = biggerThan80([34, 56, 89, 32, 123, 456, 3, 123, 56, 23]);
// console.log(myNumber);

// 11. multiplication of the 3 parameter/numbers with function ||
function multiply3(number1, number2, number3) {
    const total = number1 * number2 * number3;
    return total;
}
const result = multiply3(10, 10, 10);
// console.log(result);

// 12. declare a object and change/update any property ||
const obj = {
    name: "rokib",
    address: "jaforganj",
    phone: "85784",
};
obj.address = "manikganj";
// console.log(obj);
phn = ["phone"];
obj[phn] = "01798985"
// console.log(obj);
obj["name"] = "Sadia";
console.log(obj);