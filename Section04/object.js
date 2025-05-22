// const objectName = {
//     key1: value1,
//     key2: value2,
//     ...
// };

let student = {
    name: "An",
    age: 20,
    isStudent: true
}

// const objectName = new Object();
// objectName.key1 = value;
// objectName.key2 = value;
// ...

let students = new Object();
students.name = "An";
students.age = 20;
students.isStudent = true;

console.log(student.name);
console.log(student["age"]);

student.gender = "male";
student.age = 26; 

delete student.isStudent;

let person = {
    name: "Lan",
    address: {
        city: "Hà Nội",
        zip: "100000"
    }
};
  
console.log(person.address.city);

let user = {
    name: "Minh",
    sayHello: function() {
        console.log("Hello, tôi là " + this.name);
    }
};
  
user.sayHello();

let car = {
    brand: "BWM",
    model: "001",
    year: 2022
}

car.color = "red";
car.getInfo = function() {
    console.log('${car.brand} - ${car.model} - ${car.color} - ${car.year}');
}

car.getInfo();
