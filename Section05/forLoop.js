// for (initialization; condition; increment) {
//     // Body of loop
// }

for (let i = 1; i <= 5; i++) {
    console.log("Lần lặp thứ " + i);
}

let numbers = [1, 3, 5, 7, 9, 11, 13, 15];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
} // Output: 1, 2
  
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
} // Output: 1, 2, 4, 5
  
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

var sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
