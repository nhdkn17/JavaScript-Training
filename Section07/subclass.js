// Superclass.prototype.methodName.apply(this, arguments);
function SingletonSet(member) {
    this.member = member;
}
SingletonSet.prototype = Object.create(Set.prototype);
SingletonSet.prototype.constructor = SingletonSet;
SingletonSet.prototype.add = function() { throw "read-only"; };
SingletonSet.prototype.size = function() { return 1; };
SingletonSet.prototype.contains = function(x) { return x === this.member; };

// Subclass.prototype = Object.create(Superclass.prototype);
// Subclass.prototype.constructor = Subclass;



function abstractmethod() { throw new Error("abstract method"); }

function AbstractSet() { throw new Error("Can't instantiate"); }
AbstractSet.prototype.contains = abstractmethod;

var AbstractEnumerableSet = AbstractSet.extend(
    function() { throw new Error("Can't instantiate"); },
    {
        size: abstractmethod,
        foreach: abstractmethod,
        isEmpty: function() { 
            return this.size() === 0; 
        },
        toArray: function() {
            var result = [];
            this.foreach(v => result.push(v));
            return result;
        }
    }
);

var SingletonSet = AbstractEnumerableSet.extend(
    function(member) { this.member = member; },
    {
        contains: function(x) { return x === this.member; },
        size: function() { return 1; },
        foreach: function(f, ctx) { f.call(ctx, this.member); }
    }
);

