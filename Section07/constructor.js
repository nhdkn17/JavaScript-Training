function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    constructor: Range,
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f) {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
};

let r = new Range(1, 3);

console.log(r.includes(2));
console.log(r.toString());
console.log(r instanceof Range);
console.log(r.constructor === Range);
