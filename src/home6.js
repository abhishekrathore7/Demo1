const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/todos')
.then(a=>a.json())
.then(b=> console.log(b));