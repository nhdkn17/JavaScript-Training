let person = {
    greet() {
        console.log("Hello!");
    }
};
  
let student = Object.create(person);
  
student.greet(); // Phương thức greet() kế thừa từ person

// 

var employee = function(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.getEmployeeInfo = function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Salary: ${this.salary}`);
    }
}

var empl1 = new employee("Alice", 30, 50000);

empl1.getEmployeeInfo();

// 
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Hello, I am " + this.name);
};

let p1 = new Person("Alice");
p1.sayHello();

// 
function Animal() {}
Animal.prototype.sound = "Gâu";

let dog = new Animal();

console.log(dog.sound);                          // → "Gâu"
console.log(dog.__proto__ === Animal.prototype); // true

//
let car = {
    brand: "Toyota"
};

let myCar = Object.create(car);
myCar.brand = "Honda";

console.log(myCar.brand); // "Honda"
