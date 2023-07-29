let stocks = {
  fruits: ["apple", "banana", "mango", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc does not exist");
  } finally {
    console.log("Runs code anyways");
  }
}
order()
  .then(() => {
    console.log("Test");
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    console.log("Day ended. Shop is closed");
  });

//The order() function is called, and it contains an await abc; statement. If abc is not defined or is a rejected Promise, the catch block will catch the error and log "abc does not exist" to the console.

//If there's an error caught in the catch block, the function will still proceed to the finally block and log "Runs code anyways" to the console.

// The order() function returns a Promise, but since there's no explicit return statement with a value, it implicitly returns undefined.

// The returned Promise is chained with .then(), .catch(), and .finally().

// If there was no error caught in the catch block, the .then() block will be executed, logging "Test" to the console. This is because the Promise returned by order() is considered resolved since there's no explicit rejection.  (Reason for why .then block is executed. Because we are not specifying resolve or reject)

// If there was an error caught in the catch block, the .catch() block will be executed, logging "Customer left" to the console.

// The .finally() block will always be executed, regardless of whether there was an error or not. It will log "Day ended. Shop is closed" to the console.
