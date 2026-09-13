let isPizzaReady = true;

const pizzaOrder = new Promise((resolve, reject) => {
  if (isPizzaReady) {
    resolve("Kaam success ho gya");
  } else {
    reject("Kaam fail ho gaya");
  }
});

pizzaOrder
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
