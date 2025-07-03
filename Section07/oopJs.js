// Set class
function Set() {
    this.values = {};
    this.n = 0;
}
Set.prototype.add = function(...args) {
    for (let val of args) {
        let str = Set._v2s(val);
        if (!this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n++;
        }
    }
};
Set._v2s = function(val) {
    switch (typeof val) {
        case "number": 
            return "#" + val;
        case "string": 
            return '"' + val;
        default: 
            return '@' + (val.id || (val.id = Math.random()));
    }
};

// Enumerated Types
function enumeration(namesToValues) {
    var enumeration = function() { throw "Can't instantiate"; };
    var proto = enumeration.prototype = {
        toString: function() { return this.name; },
        valueOf: function() { return this.value; },
        toJSON: function() { return this.name; }
    };
    enumeration.values = [];
    for (let name in namesToValues) {
        let e = Object.create(proto);
        e.name = name;
        e.value = namesToValues[name];
        enumeration[name] = e;
        enumeration.values.push(e);
    }
    return enumeration;
}
  
const Coin = enumeration({Penny: 1, Nickel: 5, Dime: 10});
console.log(Coin.Dime + Coin.Nickel); // 15
  
// Standard Conversion Methods
Set.prototype.toString = function() {
    let s = "{", i = 0;
    this.foreach(v => { s += (i++ ? ", " : "") + v; });
    return s + "}";
};
    Set.prototype.toJSON = function() {
    let a = [];
    this.foreach(v => a.push(v));
    return a;
};

// Comparison Methods
Range.prototype.equals = function(that) {
    return that instanceof Range && this.from == that.from && this.to == that.to;
};
Range.prototype.compareTo = function(that) {
    if (!(that instanceof Range)) throw "Not comparable";
    let diff = this.from - that.from;
    return diff !== 0 ? diff : this.to - that.to;
};
  
// Borrowing Methods
var generic = {
    toString: function() {
        return "[" + Object.keys(this).map(k => k + "=" + this[k]).join(", ") + "]";
    }
};
Range.prototype.toString = generic.toString;

// Private State

  