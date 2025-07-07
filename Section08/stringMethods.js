"JavaScript".search(/script/i);

// Chuẩn hóa cách viết "JavaScript"
text.replace(/javascript/gi, "JavaScript");

// Thay dấu nháy thẳng thành nháy cong:
var quote = /"([^"]*)"/g;
text.replace(quote, '“$1”');  // $1 là nội dung trong cặp nháy

"1 plus 2 equals 3".match(/\d+/g); 

var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = "Visit http://example.com/page";
var result = text.match(url);

var regex = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = "Visit http://example.com/page";
var result = regex.exec(text);

result[0]; // "http://example.com/page"
result[1]; // "http"
result[2]; // "example.com"
result[3]; // "page"

var pattern = /Java/g;
var text = "JavaScript is more fun than Java!";
var result;
while ((result = pattern.exec(text)) !== null) {
  console.log(result[0], result.index, pattern.lastIndex);
}

var pattern = /java/i;
pattern.test("JavaScript"); // true
