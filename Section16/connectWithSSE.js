var ticker = new EventSource("stockprices.php");
ticker.onmessage = function(e) {
    console.log("Type:", e.type);
    console.log("Data:", e.data);
};

// VD: 
var chat = new EventSource("/chat");

    // nhận tin nhắn
chat.onmessage = function(event) {
    var msg = event.data;
    var div = document.createElement("div");
    div.textContent = msg;
    document.body.insertBefore(div, input);
};

    // gửi tin nhắn
input.onchange = function() {
    var msg = nick + ": " + input.value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/chat");
    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhr.send(msg);
    input.value = "";
};
