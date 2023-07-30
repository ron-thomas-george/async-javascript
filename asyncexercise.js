let stocks = {
  fruits: ["apple", "banana", "mango", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve();
      }, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}
async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Shop closed");
  }
}
kitchen();
