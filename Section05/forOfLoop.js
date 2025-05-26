// for (let element of iterable) {
//     // Block of code to execute with each element
// }

let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}

let text = "Hello";

for (let char of text) {
    console.log(char);
}

let numbers = new Set([1, 2, 3]);

for (let num of numbers) {
    console.log(num);
}

let userMap = new Map([
    ["name", "Alice"],
    ["age", 25],
]);
  
for (let [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}
