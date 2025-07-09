function counter(start) {
    let value = start;
    return {
        next: function() { return value++; }
    };
}
let c = counter(100);
console.log(c.next());
console.log(c.next());

function range(min, max) {
    return {
        __iterator__: function() {
            let val = Math.ceil(min);
            return {
                next: function() {
                    if (val > max) throw StopIteration;
                    return val++;
                }
            };
        }
    };
}
  
for (let i in range(1, 5)) console.log(i);
  
function* range(min, max) {
    for (let i = min; i <= max; i++) yield i;
}
  
for (let x of range(3, 7)) console.log(x);
  
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield b;
        [a, b] = [b, a + b];
    }
}
  
let f = fibonacci();
console.log(f.next().value);
console.log(f.next().value);
console.log(f.next().value);

// [ expression for (variable in iterable) if (condition) ]

// let squares = [x*x for (x in range(1, 5))];
// let evens = [x for (x in range(0, 10)) if (x % 2 === 0)];
// let notFuncs = [k for ([k, v] in Iterator(obj)) if (typeof v !== 'function')];

// let lines = eachline(text);
// let trimmed = (l.trim() for (l in lines));
// let nonblank = (l for (l in trimmed) if (l.length > 0 && l[0] !== '#'));

// for (let line in nonblank) {
//     if (line === "quit") break;
//     console.log(line);
// }
  