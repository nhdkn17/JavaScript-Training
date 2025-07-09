function polar(x, y) {
    return [Math.sqrt(x*x + y*y), Math.atan2(y, x)];
}
let [r, theta] = polar(1, 1);

let [one, [twoA, twoB]] = [1, [2, 2.5]];

let first, second, all;
all = [first, second] = [1, 2, 3];

let {propName: variableName} = object;

let transparent = {r: 0, g: 0, b: 0, a: 1};
let {r: red, g: green, b: blue} = transparent;

let data = {
    name: "destructuring assignment",
    impl: [
      {engine: "spidermonkey", version: 1.7},
      {engine: "rhino", version: 1.7}
    ]
};

let {
    name: feature,
    impl: [
        {engine: impl1, version: v1},
        {engine: impl2}
    ]
} = data;

console.log(feature);
console.log(impl1);
console.log(v1);
console.log(impl2);
  