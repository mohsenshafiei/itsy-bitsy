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

const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

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

const takeRightWhile = (arr, fn) => arr.reduceRight((res, el) => (fn(el) ? [el, ...res] : []));

const mapString = (str, fn) => str.split('').map((c, i) => fn(c, i, str)).join('');

const uniqueElementsBy = (arr, fn) => arr.reduce((acc, v) => !acc.some(x => fn(v, x)) ? (acc.push(v), acc) : acc, []);

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

const isEven = num => num % 2 === 0;

const isOdd = not(isEven);

const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);

const drop = (arr, n = 1) => arr.slice(n);

const last = arr => arr[arr.length - 1];

const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);

const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');

const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

const findLast = (arr, fn) => arr.filter(fn).pop();

const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const is = (type, val) => ![, null].includes(val) && val.constructor === type;

const isLowerCase = str => str === str.toLowerCase();

const isUpperCase = str => str === str.toUpperCase();

const reject = (pred, array) => array.filter((...args) => !pred(...args));

const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

const toKebabCase = str => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');

const timeTaken = callback => (console.time('timeTaken'), callback(), console.timeEnd('timeTaken'));

const isPrimitive = val => Object(val) !== val;

const digitize = n => [...`${n}`].map(i => parseInt(i));

const radsToDegrees = rad => (rad * 180.0) / Math.PI;

const degreesToRads = deg => (deg * Math.PI) / 180.0;

const truncateString = (str, num) => str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

const similarity = (arr, values) => arr.filter(v => values.includes(v));

const functionName = fn => (console.debug(fn.name), fn);

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);

const isDivisible = (dividend, divisor) => dividend % divisor === 0;

const isSymbol = val => typeof val === 'symbol';

const splitLines = str => str.split(/\r?\n/);

const pad = (str, length, char = ' ') => str.padStart((str.length + length) / 2, char).padEnd(length, char);

const yesNo = (val, def = false) => /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;

const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

const isBeforeDate = (dateA, dateB) => dateA < dateB;

const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

const shallowClone = obj => Object.assign({}, obj);

const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));

const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

const getMeridiemSuffixOfInteger = num => num === 0 || num === 24 ? 12 + 'am' : num === 12 ? 12 + 'pm' : num < 12 ? (num % 12) + 'am' : (num % 12) + 'pm';

const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);

const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));

const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});

const toCurrency = (n, curr, LanguageFormat = undefined) => Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);

const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

const all = (arr, fn = Boolean) => arr.every(fn);

const any = (arr, fn = Boolean) => arr.some(fn);

const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

const reduceWhich = (arr, comparator = (a, b) => a - b) => arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

const btoa = str => Buffer.from(str, 'binary').toString('base64');
