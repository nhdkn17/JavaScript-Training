let bytes = new Uint8Array(1024);
for (let i=0; i<bytes.length; i++) bytes[i] = i & 0xFF;

let copy = new Uint8Array(bytes);
let ints = new Int32Array([0,1,2,3]);

function sieve(n) {
    let a = new Int8Array(n+1);
    let max = Math.floor(Math.sqrt(n));
    let p = 2;
    while (p <= max) {
        for (let i = 2*p; i <= n; i += p) a[i] = 1;
        while (a[++p]);
    }
    while (a[n]) n--;
    return n;
}

let matrix = new Float64Array(9);
let point3d = new Int16Array(3);
let rgba = new Uint8Array(4);

let pattern = new Uint8Array([0,1,2,3]);
bytes.set(pattern);
bytes.set(pattern, 4);

let ints1 = new Int16Array([0,1,2,3,4,5,6,7,8,9]);
let last3 = ints.subarray(7, 10);
ints1[9] = -1;
console.log(last3[2]);

let buf = new ArrayBuffer(1024*1024);
let asBytes = new Uint8Array(buf);
let asInts = new Int32Array(buf);

let littleEndian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;

let view = new DataView(buffer);
let x = view.getInt32(0, false);
let y = view.getInt32(4, true); 
view.setInt32(8, y, false);