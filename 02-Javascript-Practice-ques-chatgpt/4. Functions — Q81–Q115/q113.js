// Q113 🔴 Recursive nested object traversal

const traverseObject = (obj) => {
  for (const key in obj) {
    const val = obj[key];

    // 1. Agar value khud ek object hai (andar ek aur dabba mila)
    if (typeof val === "object" && val !== null) {
      traverseObject(val); // 🔁 RECURSION: Function ne khud ko andar wale object ke sath call kiya
    } else {
      // 2. Base Case: Normal value (string, number) mil gayi, toh print kar do
      console.log(`${key}: ${val}`);
    }
  }
};

// Test Data (2-3 levels deep nested object)
const user = {
  name: "Amit",
  age: 25,
  address: {
    city: "Delhi",
    pincode: 110001,
    coordinates: {
      lat: 28.61,
      lng: 77.23
    }
  }
};

traverseObject(user);