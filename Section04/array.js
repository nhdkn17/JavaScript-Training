// let numbers = [1, 2, 3, 4, 5];
// let colors = new Array("Đỏ", "Xanh", "Vàng");

// tenMang[index];

let animals = ["Mèo", "Chó", "Cá"];
console.log(animals[0]);
console.log(animals[2]);

let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers); // [1, 10, 3]

let mixed = [1, "JS", true, [4, 5], {name: "Lan"}];

mixed.indexOf("JS");
mixed.includes("JS");
Array.isArray([1, 2, 3]);

// array.fill(value, start, end);
let arr = [1, 2, 3, 4, 5];
arr.fill(9, 1, 4);
console.log(arr); // [1, 9, 9, 9, 5]

let names = ["An", "Lan", "Ngọc", "Minh"];
let ketQua = names.filter(name => name.length > 3);
console.log(ketQua);

// array.slice(start, end);

let colors = ["Đỏ", "Cam", "Vàng", "Xanh", "Tím"];
let warmColors = colors.slice(0, 3);

// let copy = originalArray.slice();

let myNumbers = [3, 34, 28, 43, 74, 52, 59, 21, 49, 53];
myNumbers.splice(2, 4, "Hello", "World");
console.log(myNumbers); // [ 3, 34, 'Hello', 'World', 59, 21, 49, 53 ]