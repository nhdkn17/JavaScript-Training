window.onload = function() {
    var form = document.getElementById("shipping_address");
    form.onsubmit = function() { return validate(this); };
};

// <button onclick="alert('Thank you');">Click Here</button>

// function(event) {
//     with(document) {
//         with(this.form || {}) {
//             with(this) {
//                 // your inline code
//             }
//         }
//     }
// }

// element.addEventListener(eventType, handler, useCapture);

element.onclick = function(event) {
    console.log(event.type);
};

// bubbling
document.body.addEventListener("click", e => {
    console.log("body handler"); 
}, false);

// capturing
document.body.addEventListener("click", e => {
    console.log("capturing handler"); 
}, true);

