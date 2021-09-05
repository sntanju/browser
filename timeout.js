
function doSomething(){
    console.log('I  am Coding Javascript');
}
console.log('I am First');
console.log('I am Second');
//setTimeout(doSomething, 5000);
setTimeout(function(){
    console.log('I am using VS Code');
}, 5000);

setTimeout( () => {
    console.log('Exploring setTimeout')
}, 4000);

console.log('I am Third');
console.log('I am Fourth');