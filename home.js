//OBJECT DESCRIPTOR//

const ObjectA = {};
Object.defineProperty(ObjectA, 'name', {
    value: 'Abhishek Rathore',
    writable:false
});

Object.defineProperty(ObjectA, 'email', {
    value: 'abhi@gmail.com',
    writable:true
});


ObjectA.name = 'Hira';
ObjectA.email = 'abhishek@gmail.com'
console.log(ObjectA.name);
console.log(ObjectA.email);