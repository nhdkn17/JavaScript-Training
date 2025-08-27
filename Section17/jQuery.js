// $("div")
// $("script", document.body)

// $(document)
// $(this)
// $( [element1, element2] )

// $("<img/>", {
//     src: "logo.png",
//     css: {borderWidth: 5},
//     click: handleClick
// });

// $(function() {
//     // ...
// });

$(document).ready(function () {
    $("#checkBtn").on("click", function () {
        let xhr = new XMLHttpRequest();

        if ("onprogress" in xhr) {
            $("#result").text("Trình duyệt của bạn hỗ trợ progress events (onprogress).");
        } else {
            $("#result").text("Trình duyệt của bạn KHÔNG hỗ trợ progress events.");
        }
    });
});

$("img").fadeOut().show(300).slideUp().slideToggle();

$("p").animate({
    "margin-left": "+=.5in",
    opacity: "-=.1"
});

$("img").fadeIn(500)
.animate({width:"+=100"}, {queue:false, duration:1000})
.fadeOut(500);

$("img").animate({
    width: ["hide", "linear"],
    height: ["hide", "linear"],
    opacity: "hide"
});

$("img").bind({
    mouseover: function() { $(this).stop().fadeTo(300, 1.0); },
    mouseout:  function() { $(this).stop().fadeTo(300, 0.5); }
});

$("#message").fadeIn().delay(200).queue(function(next) {
    $(this).text("Hello World");
    next();
}).animate({borderWidth: "+=10px"});

// $.get(url, [data], [callback], [dataType]);
// $.post(url, [data], [callback], [dataType]);
