//synchronous
console.log("I");

console.log("eat");

console.log("ice cream");

console.log("with a");

console.log("spoon");

//asynchronous
console.log("I");

console.log("eat");

//setTimeout is an asynchronous function
setTimeout(() => {
  console.log("ice cream");
}, 4000);

console.log("with a");

console.log("spoon");

//normal function exexution flow
function oneCar() {
  console.log("Step 1");
}

function twoCar() {
  console.log("Step 2");
}

twoCar(); //function two is called first
oneCar(); //function one is executed only after function two is executed
//This is synchronous. Because functions are executed in the order they are called

//using callback
function one(call_two) {
  console.log("Step 1 completed. Please call Step 2");
  call_two();
}

function two() {
  console.log("Step 2 completed");
}

one(two);
