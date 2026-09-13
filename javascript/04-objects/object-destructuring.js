// Object Destructuring Practice

const user = {
  name: "Abhishek",
  age: 23,
  city: "Meerut",
  education: {
    degree: "BTech CSE",
    year: 2024,
  },
  skills: ["HTML", "CSS", "JavaScript", "React"],
};

// 1. Basic Destructuring
const { name, age, city } = user;
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// 2. Renaming variables while destructuring
const { name: userName, city: userCity } = user;
console.log(`User Name: ${userName}, Location: ${userCity}`);

// 3. Default values
const { country = "India" } = user;
console.log(`Country: ${country}`);

// 4. Nested Destructuring
const {
  education: { degree, year },
} = user;
console.log(`Degree: ${degree}, Year: ${year}`);
