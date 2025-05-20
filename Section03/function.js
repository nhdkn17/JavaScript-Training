// function tenHam(thamSo1, thamSo2, ...) {
//     // thân hàm
//     return giaTri;
// }

// tenHam(doiSo1, doiSo2);

function greeting() {
    console.log("Hello World!");
}

greeting();

function hello(name) { // name is parameter
    console.log("Hello " + name);
}
    
hello("Lan"); // "Lan" is argument

function showMessage() {
    console.log("Xin chào JavaScript!");
}
showMessage();

function xuLy(x, hamXuLy) {
    hamXuLy(x);
}

xuLy(5, function(val) {
    console.log("Giá trị là:", val);
});

(function() {
    console.log("Hello!");
})();

function giaiThua(n) {
    if (n === 0) return 1;
    return n * giaiThua(n - 1);
}
  
console.log(giaiThua(5));

// const myFunction = function(thamSo) {
//     // thân hàm
//     return ketQua;
// };
  
const tinhTong = function(a, b) {
    return a + b;
};
  
console.log(tinhTong(3, 4));
