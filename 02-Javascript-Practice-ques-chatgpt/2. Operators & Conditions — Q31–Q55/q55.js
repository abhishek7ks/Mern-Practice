// Q55 🔴 Nested conditions se shipping fee calculator

let orderAmount = 400;
let location = "national"; // local, national, international
let weight = 2; // kg

let shippingFee = 0;

if (orderAmount > 500) {
  console.log("Free Shipping");
} else {
  if (location === "local") {
    if (weight <= 5) shippingFee = 40;
    else shippingFee = 80;
  } else if (location === "national") {
    if (weight <= 5) shippingFee = 100;
    else shippingFee = 180;
  } else {
    if (weight <= 5) shippingFee = 300;
    else shippingFee = 500;
  }
  console.log(`Shipping Fee: Rs ${shippingFee}`);
}