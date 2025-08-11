e.style.fontSize = "24pt";
e.style.fontWeight = "bold";
e.style.color = "blue";

e.style.left = "300px";
e.style.left = (x0 + padding) + "px";

e.style.margin = "10px 20px 10px 20px";
e.style.marginTop = "10px";

e.setAttribute("style", "color: red; background: yellow;");
let s1 = e.getAttribute("style");

e.style.cssText = "color: red; background: yellow;";
let s2 = e.style.cssText;

// <button onclick="shake(this, fadeOut);">Shake and Fade</button>

let elem = document.getElementById("section1title");
let styles = window.getComputedStyle(elem, null);
// Or for a pseudo-element:
let beforeStyles = window.getComputedStyle(elem, ":before");

function scaleColor(e, factor) {
    let color = window.getComputedStyle(e, "").backgroundColor;
    let components = color.match(/[\d\.]+/g); // extract numbers
    
    for (let i = 0; i < 3; i++) {
        let x = Number(components[i]) * factor;
        x = Math.round(Math.min(Math.max(x, 0), 255)); // clamp
        components[i] = String(x);
    }
    
    if (components.length === 3) {
        e.style.backgroundColor = `rgb(${components.join()})`;
    } else {
        e.style.backgroundColor = `rgba(${components.join()})`;
    }
}

function disableStylesheet(ss) {
    if (typeof ss === "number")
        document.styleSheets[ss].disabled = true;
    else {
        var sheets = document.querySelectorAll(ss);
        for (var i = 0; i < sheets.length; i++)
        sheets[i].disabled = true;
    }
}

var ss = document.styleSheets[0];
var rules = ss.cssRules || ss.rules;
var firstRule = rules[0];
console.log(firstRule.selectorText, firstRule.style.cssText);

