const id = setTimeout(() => console.log("Run after 2 seconds"), 2000);
clearTimeout(id);

// setInterval(function, intervalInMilliseconds);

const id1 = setInterval(() => console.log("Tick"), 1000);
clearInterval(id1);

function urlArgs() {
    var args = {};
    var query = location.search.substring(1); // bỏ dấu ?
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pos = pairs[i].indexOf('=');
      if (pos === -1) continue;
      var name = pairs[i].substring(0, pos);
      var value = pairs[i].substring(pos + 1);
      value = decodeURIComponent(value); // Giải mã (URL decode)
      args[name] = value;
    }
    return args;
}

// URL: http://site.com/page.html?name=Alice&age=30
let params = urlArgs();
console.log(params.name);
console.log(params.age);

location.assign("page2.html");   // Sang trang mới, Back vẫn quay lại được
location.replace("fallback.html"); // Sang trang mới, không quay lại được
location.reload();               // Tải lại trang

location = "#top";

location.search = "?page=2"; // Tải lại trang với query mới
location.hash = "#comments"; // Cuộn đến vùng có id="comments"

var newWin = window.open(url, name, features, replace);

var iframeWin = document.getElementById("f1").contentWindow;

// window.frameElement // trả về thẻ <iframe> chứa nó

frames[0]         // frame đầu tiên
frames["f1"]      // truy cập theo name hoặc id
frames.f1         // tương đương

{/* <iframe name="f1"></iframe>
<a href="next.html" target="f1">Mở trong frame</a> */}
