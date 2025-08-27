localStorage.username = "Alice";
var name = localStorage["username"];

localStorage.setItem("x", 1);
var val = localStorage.getItem("x");

for (var i = 0; i < localStorage.length; i++) {
    var k = localStorage.key(i);
    console.log(k, localStorage.getItem(k));
}

localStorage.removeItem("x");
localStorage.clear();

window.addEventListener("storage", function(e) {
    console.log(e.key, e.oldValue, e.newValue, e.url);
});

// document.cookie = "name=value"
document.cookie = "name=value; max-age=seconds";

function getCookies() {
    // trả về object {name: value}
}

// Tạo phần tử đặc biệt
var memory = document.createElement("div");
memory.style.display = "none";
memory.style.behavior = "url('#default#userData')";
document.body.appendChild(memory);

// Tải dữ liệu cũ
memory.load("myStoredData");
var name = memory.getAttribute("username");

// Nếu chưa có thì hỏi và lưu lại
if (!name) {
    name = prompt("What is your name?");
    memory.setAttribute("username", name);
    memory.save("myStoredData");
}

// lifetime 
var now = new Date().getTime();
var expires = now + 100*24*60*60*1000;
memory.expires = new Date(expires).toUTCString();

// Triển khai một phần Storage API
function UserDataStorage(maxage) {
    var memory = document.createElement("div");
    memory.style.display = "none";
    memory.style.behavior = "url('#default#userData')";
    document.body.appendChild(memory);

    if (maxage) {
        var now = Date.now();
        memory.expires = new Date(now + maxage * 1000).toUTCString();
    }

    memory.load("UserDataStorage");

    this.getItem = function(key) {
        return memory.getAttribute(key) || null;
    };
    this.setItem = function(key, value) {
        memory.setAttribute(key, value);
        memory.save("UserDataStorage");
    };
    this.removeItem = function(key) {
        memory.removeAttribute(key);
        memory.save("UserDataStorage");
    };
}
