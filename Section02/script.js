// Bài 1:
// - Khai báo số x có giá trị bất kỳ
// - Nếu x < 0 thì in ra x là số âm
// - Nếu x = 0 thì in ra x = 0
// - Nếu x > 0, và x là số nguyên thì in ra x là số nguyên dương
// - Nếu x > 0 và x là số  thập phân thì in ra x là số thập phân dương

let x = 25;

if (x < 0) {
    console.log("x là số âm");
} else if (x = 0) {
    console.log("x = " + x);
} 
if (x > 0 && (x % 2 === 0 || x % 2 === 1)) {
    console.log("x là số nguyên dương");
} else {
    console.log("x là số thập phân dương");
}

// Bài 2:
// Viết chương trình kiểm tra đăng nhập hệ thống của người dùng theo yêu cầu sau
// - Yêu cầu người dùng nhập tên từ bàn phím.
// - Nếu tên nhập vào là Admin thì yêu cầu nhập mật khẩu.
// - Nếu mật khẩu là TheMaster thì in ra chuỗi Welcome.
// - Nếu mật khẩu nhập vào là null in ra chuỗi Canceled.
// - Còn lại in ra chuỗi Wrong password.
// - Nếu tên nhập vào là null in ra chuỗi canceld.
// - Còn lại in ra chuỗi “I don’t know you”

let userName = prompt("Enter username: ", '');

if (userName == "admin") {
    let password = prompt("Enter password: ", '');
    if (password == "Themaster") {
        console.log("Welcome!");
    } else if (password == null) {
        console.log("Cencelled!");
    } else {
        console.log("Password is incorrect!")
    }
} else if (userName == null) {
    console.log('Canceled');
} else {
    console.log("There isn't this username!");
}
