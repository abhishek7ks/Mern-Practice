// Q54 🟡 Triangle ka type identify karo

let x = 5, y = 5, z = 5;

if (x + y > z && y + z > x && x + z > y) {
  if (x === y && y === z) {
    console.log("Equilateral Triangle");
  } else if (x === y || y === z || x === z) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
} else {
  console.log("Invalid Triangle");
}