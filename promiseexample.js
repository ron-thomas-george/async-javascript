let stocks = {
  fruits: ["apple", "banana", "mango", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.fruits[0]} was selected`);
})
  .then(() => {
    return order(0o00, () => {
      console.log("Production was started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("The fruit was chopped");
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("Start the machine");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`Ice cream placed on ${stocks.holder[0]}`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} was selected`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("Ice cream was served");
    });
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    console.log("Day ended. Shop is closed");
  });
