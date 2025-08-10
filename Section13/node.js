var div = document.createElement("div");
var p = document.createElement("p");

var text = document.createTextNode("Hello world!");

var comment = document.createComment("This is a comment");

var fragment = document.createDocumentFragment();

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

var copy = originalNode.cloneNode(true);  // Deep clone
var shallowCopy = originalNode.cloneNode(false); // Chỉ phần tử gốc

var imported = document.importNode(nodeFromOtherDoc, true);
