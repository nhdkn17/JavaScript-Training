// for (let key in object) {
//     // Manipulate with object[key]
// }

let student = {
    name: "John",
    age: 20,
    major: "Computer Science"
};
  
for (let prop in student) {
    console.log(`${prop.toUpperCase()}: ${student[prop]}`);
}

let students = [
    { name: "Anna", age: 21 },
    { name: "Bob", age: 22 }
];
  
for (let i in students) {
    console.log(students[i].name + " - " + students[i].age);
}
