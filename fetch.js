console.log(323232);
console.log(323232);

setTimeout( () => console.log('aaaaa'), 5000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(responce => responce.json())
.then(json => console.log(json))

console.log(323232);
console.log(323232);
console.log(323232);