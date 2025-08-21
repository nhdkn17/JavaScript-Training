// Steps to create HTTP request with XMLHttpRequest
// 1. Create Request: var request = new XMLHttpRequest();
// 2. Call open(method, url, [async], [user], [password])
// 3. Set headers: 
//   request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
// 4. Send body with send(): 
//   POST có body:
//      request.send(msg); 
//   GET không có body:
//      request.send(null); 

function postMessage(msg) {
    var request = new XMLHttpRequest();
    request.open("POST", "/log.php"); 
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.send(msg);

    // request.setRequestHeader("Content-Type", "application/json");
    // request.send(JSON.stringify(data));
}

function formData() {
    var formdata = new FormData();
    formdata.append("name", "Alice");
    formdata.append("file", fileObj);
    xhr.send(formdata);
}

if ("onprogress" in new XMLHttpRequest()) {
    // Trình duyệt hỗ trợ progress events
}

function downloadFile()  {
    let xhr = new XMLHttpRequest();

    if ("onprogress" in xhr) {
        xhr.onprogress = function(event) {
            if (event.lengthComputable) {
                let percent = (event.loaded / event.total) * 100;
                console.log(`Đã tải: ${percent.toFixed(2)}%`);
            }
        };
    }

    xhr.open("GET", "large-file.zip", true);
    xhr.send();
}

function timedGetText(url, timeout, callback) {
    var request = new XMLHttpRequest();
    var timedout = false;

    var timer = setTimeout(function() {
        timedout = true;
        request.abort();
    }, timeout);

    request.open("GET", url);

    request.onreadystatechange = function() {
        if (request.readyState !== 4) return;
        if (timedout) return;
        clearTimeout(timer);

        if (request.status === 200) {
        callback(request.responseText);
        }
    };

    request.send(null);
}
