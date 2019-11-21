// function manipulators
const increment = (fn) => (...args) => fn(...args.map(arg => arg + 1));

const decrement = (fn) => (...args) => fn(...args.map(arg => arg - 1));

const adder = (fn, n) => (...args) => fn(...args.map(arg => arg + n));

const subtractor = (fn, n) => (...args) => fn(...args.map(arg => arg - n));

const multer = (fn, n) => (...args) => fn(...args.map(arg => arg * n));

const divider = (fn, n) => (...args) => fn(...args.map(arg => arg / n));

const reminder = (fn, n) => (...args) => fn(...args.map(arg => arg % n));

const spread = (fn) => (args) => fn(...args);

const gather = (fn) => (...args) => fn(args.map(arg => arg));

const flip = (fn) => (x, y, ...args) => fn(y, x, ...args);

const reverse = (fn) => (...args) => fn(...args.reverse());

const summation = ([sum, ...args], cont) => (args.length === 0) ? cont(sum) : summation(args, (v) => cont(sum + v));

const sigma = ((...args) => (...args) => summation(args, v => v))();

const multiplication = ([sum, ...args], cont) => (args.length === 0) ? cont(sum) : multiplication(args, (v) => cont(sum * v));

const pi = ((...args) => (...args) => multiplication(args, v => v))();

const compose = (...fns) => (result) => fns.reverse().reduce((result, fn) => fn(result), result);

const pipe = (...fns) => (result) => fns.reduce((result, fn) => fn(result), result);

const fusion = (args, fns) => args.map(compose(...fns));

const defusion = (args, fns) => args.map(pipe(...fns));

const partial = (fn, ...firstArgs) => (...lastArgs) => fn(...firstArgs, ...lastArgs);

const not = (fn) => (...args) => !fn(...args);

const when = (fn) => (predicate) => (...args) => predicate(...args) ? fn(...args) : false;

const clone = (args) => args.map(arg => Array.isArray(arg) ? clone(arg) : arg);

const deduplicate = (args) => [...new Set(args)]

const debug = (arg) => (console.log(arg), arg);

const reverseRight = (arr) => arr.reduceRight((result, value) => [...result, value], []);

const flat = (arr) => arr.reduce((result, value) => Array.isArray(value) ? [...result, ...flat(value)] : [...result, value], [])

const takeRightWhile = (arr, fn) => arr.reduceRight((res, el) => (fn(el) ? [el, ...res], []));
