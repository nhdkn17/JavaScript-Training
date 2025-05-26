// do {
//     // Block of code to repeat
// } while (condition);

let i = 1;

do {
    console.log("Giá trị của i:", i);
    i++;
} while (i <= 3);

let number;

do {
    number = parseInt(prompt("Nhập một số > 0:"));
} while (number <= 0 || isNaN(number));

console.log("Số bạn đã nhập:", number);
