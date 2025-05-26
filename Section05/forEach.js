// array.forEach(function(element, index, array) {
//     // Work with each element here
// });

// array.forEach((element, index, array) => {
//     // code
// });

let colors = ["Red", "Green", "Blue"];

colors.forEach(function(color) {
    console.log(color);
});  

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});

let numbers = [1, 2, 3];

numbers.forEach((num) => {
    console.log(num * 2);
});

let users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 25 },
];
  
users.forEach((user) => {
    console.log(`${user.name} is ${user.age} years old`);
});
