
let billAmount = Number(prompt("Enter total bill amount:"));
let paymentAmount = Number(prompt("Enter payment amount:"));

if (paymentAmount < billAmount) {
  alert("Insufficient payment!");
} else {
  let change = paymentAmount - billAmount;

  if (change === 5) {
    alert("Return: 1 Chocolate");
  } else if (change === 7) {
    alert("Return: 1 Chocolate and 2 Rs");
  } else if (change === 10) {
    alert("Return: 2 Chocolates");
  } else {
    alert("Return: " + change + " Rs");
  }
}