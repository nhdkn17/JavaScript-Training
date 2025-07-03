function inherit(p) {
    function f() {}
    f.prototype = p;
    return new f();
}

// Hàm tạo đối tượng Range
function range(from, to) {
    var r = inherit(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

// Prototype chứa các phương thức dùng chung
range.methods = {
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
};

let r = range(1, 3);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r.toString());
