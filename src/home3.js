const obj = {};

Object.defineProperty(obj, 'aprop', {
    get() { return Math.sqrt(2) },
    configurable: false
});
// Object.defineProperty(obj, 'aprop', {
//     configurable: true
// });
// Object.defineProperty(obj, 'aprop', {
//     enumerable: true
// });
// Object.defineProperty(obj, 'aprop', {
//     set() { }
// });

delete obj.aprop;
console.log(obj.aprop.toString());

const obj = {};

// Object.defineProperty(obj, 'aprop', {
//     get() { return Math.sqrt(2) },
//     writable: true,
//     configurable: false
// });

// Object.defineProperty(obj, 'bprop', {
//     get() { return Math.sqrt(3) }
// });
// Object.defineProperty(obj, 'aprop', {
//     configurable: true
// });
// Object.defineProperty(obj, 'aprop', {
//     enumerable: true
// });
// Object.defineProperty(obj, 'aprop', {
//     set() { }
// });

// delete obj.aprop;
// obj.aprop = 10001;
// console.log(obj.aprop.toString());
Object.defineProperty(obj, 'bp', {
    value: 100

});
Object.defineProperty(obj, 'bp', {
    writable: false
});
// Object.defineProperty(obj, 'bp', {
//     value: 1001
// });
console.log(obj.bp);