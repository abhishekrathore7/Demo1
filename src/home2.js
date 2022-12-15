const obj = {};

Object.defineProperty(obj, 'aprop', {
    value: 1,
    enumerable: true
});
Object.defineProperty(obj, 'bprop', {
    value: 2,
    enumerable: false
});
Object.defineProperty(obj, 'cprop', {
    value: 33
});
// console.log(obj.aprop);
// console.log(obj.bprop);
// console.log(obj.cprop);
obj.dprop = 10000;//Enumerable automatically becomes true in this case
// console.log(obj.dprop);
Object.defineProperty(obj, Symbol.for('e'), {
    value: 55,
    enumerable: true
});
Object.defineProperty(obj, Symbol.for('f'), {
    value: 66,
    enumerable: false,
});


// obj.aprop = 100;
// console.log(obj.aprop);
// obj.bprop = 1000;
// console.log(obj.bprop);
// obj.cprop = 90;
// console.log(obj.cprop);
// console.log(obj.dprop);

// console.log(Object.keys(obj));
Object.keys(obj).forEach(function(n){
    console.log(n);
});
console.log(obj.propertyIsEnumerable('aprop'));
console.log(obj.propertyIsEnumerable('bprop'));
console.log(obj.propertyIsEnumerable('cprop'));
console.log(obj.propertyIsEnumerable('dprop'));

console.log(Object.getOwnPropertyDescriptor(obj, 'aprop'));
console.log(Object.getOwnPropertyDescriptor(obj, 'bprop'));

const pobj = {...obj};    // ... is a spread operator
//When you clone the properties whose enumerable is false will not be listed
console.log(pobj.aprop);
console.log(pobj.bprop);
console.log(pobj.cprop);
console.log(pobj.dprop);

Object.defineProperty(obj, 'eprop', {
    value: 301,
    writable:true,
    enumerable: true,
    configurable:true 
});

obj.eprop = 501;
console.log(obj.eprop);

//The configurable attrib controls at the same time
//whether the property can be deleted
//whether its attributs can be changed

