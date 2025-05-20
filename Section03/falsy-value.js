// undefined
// null
// ''
// NaN

console.log("5" + 3); // Kết quả: "53"
console.log("5" - 3); // Kết quả: 2
console.log(true + 1); // Kết quả: 2 => true => 1
console.log(null + 1); // Kết quả: 1 => null => 0

console.log(Number("123")); // Kết quả: 123 (string -> number)
console.log(String(456)); // Kết quả: "456" (number -> string)
console.log(Boolean("hello")); // Kết quả: true (string -> boolean)

console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(undefined)); // false

console.log(Boolean(1));       // true
console.log(Boolean("JS"));    // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true

console.log("JS" && 123);
