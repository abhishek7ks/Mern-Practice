// Q51 🟡 Login validation using email/password conditions

let email = "abhishek@gmail.com";
let password = "Abhishek@123";

if (!email.includes("@") || !email.includes(".")) {
  console.log("Invalid Email");
} else if (password.length < 8) {
  console.log("Password chhota hai, 8 char chahiye");
} else {
  console.log("Login Successful");
}