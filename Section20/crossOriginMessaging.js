// otherWindow.postMessage(message, targetOrigin);

window.addEventListener("message", (event) => {
    // Luôn kiểm tra ai gửi tin nhắn
    if (event.origin !== "https://trusted.com") return;

    console.log("Got message:", event.data);
    console.log("From:", event.source);
}, false);

// Ví dụ 1:
if (window.addEventListener)
    window.addEventListener("message", handleMessage, false);
else

window.attachEvent("onmessage", handleMessage);

function handleMessage(e) {
    if (e.source !== window.parent) return;
    var searchterm = e.data;
    jQuery.getJSON("http://search.twitter.com/search.json?callback=?", 
        { q: searchterm },
        function(data) {
            var tweets = data.results;
            var escaped = searchterm.replace("<", "&lt;");
            var html = "<h2>" + escaped + "</h2>";
            if (tweets.length == 0) {
                html += "No tweets found";
            } else {
                html += "<dl>";
                for(var i = 0; i < tweets.length; i++) {
                    var tweet = tweets[i];
                    var text = tweet.text;
                    var from = tweet.from_user;
                    var tweeturl = "http://twitter.com/#!/" +
                    from + "/status/" + tweet.id_str;
                    html += "<dt><a target='_blank' href='" +
                    tweeturl + "'>" + tweet.from_user +
                    "</a></dt><dd>" + tweet.text + "</dd>";
                }
                html += "</dl>";
            }
            document.body.innerHTML = html;
        });
}

$(function() {
    window.parent.postMessage("Twitter Search v0.1", "*");
});

// Ví dụ 2:
window.addEventListener("load", function() {
    var origin = "http://davidflanagan.com";
    var gadget = "/demos/TwitterSearch.html";
    var iframe = document.createElement("iframe");
    Client-Side
    JavaScriptiframe.src = origin + gadget;
    iframe.width = "250";
    iframe.height = "100%";
    iframe.style.cssFloat = "right";

    document.body.insertBefore(iframe, document.body.firstChild);

    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function() {
            iframe.contentWindow.postMessage(this.href, origin);
        }, false);
    }
}, false);