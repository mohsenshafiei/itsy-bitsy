### Itsy-Bitsy

One line cool utility functions

Function Manipulators Example:
```js
const f = (...args) => console.log(args);
reminder(f, 2)(1, 2, 3, 4, 5);
```


Function Combination Examples:
```js
const inc = (x) => x + 1;
const dec = (x) => x - 1;
const double = (x) => x * 2;
const half = (x) => x / 2;


const list = [2, 5, 8, 11, 14, 17, 20];
console.log(fusion(list, [double, dec, inc]));
console.log(defusion(list, [inc, dec, double]));
```
