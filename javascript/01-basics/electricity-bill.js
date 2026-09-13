const prompt = require('prompt-sync')();

let bill = Number(prompt("Enter Your Bijli Bill: "));
let totamt = 0;

if (isNaN(bill) || bill < 0) {
  console.log("Enter Your correct bill");

}
else {
if (bill > 0 && bill <= 100) {
  totamt = 4.2 * bill

} else if (bill > 100 && bill <= 200) {
  totamt = (4.2 * 100 + (bill - 100) * 6);



} else if (bill > 200 && bill <= 400) {
  totamt = (100 * 4.2) + (100 * 6) + (bill - 200) * 8




} else if (bill > 400) {
  totamt = (100 * 4.2) + (100 * 6) + (200 * 8) + (bill - 400) * 13


}
  console.log(`Your Total Bill is: ${totamt} Rupees`);
}


